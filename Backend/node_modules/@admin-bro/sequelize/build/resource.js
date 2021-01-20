"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-param-reassign */
const flat_1 = require("flat");
const admin_bro_1 = require("admin-bro");
const sequelize_1 = require("sequelize");
const property_1 = __importDefault(require("./property"));
const convert_filter_1 = __importDefault(require("./utils/convert-filter"));
const create_validation_error_1 = __importDefault(require("./utils/create-validation-error"));
const SEQUELIZE_VALIDATION_ERROR = 'SequelizeValidationError';
const SEQUELIZE_UNIQUE_ERROR = 'SequelizeUniqueConstraintError';
class Resource extends admin_bro_1.BaseResource {
    constructor(SequelizeModel) {
        super(SequelizeModel);
        this.SequelizeModel = SequelizeModel;
    }
    static isAdapterFor(rawResource) {
        return rawResource.sequelize && rawResource.sequelize.constructor.name === 'Sequelize';
    }
    rawAttributes() {
        // different sequelize versions stores attributes in different places
        // .rawAttributes => sequelize ^5.0.0
        // .attributes => sequelize ^4.0.0
        return (this.SequelizeModel.attributes
            || this.SequelizeModel.rawAttributes);
    }
    databaseName() {
        return this.SequelizeModel.sequelize.options.database
            || this.SequelizeModel.sequelize.options.host;
    }
    databaseType() {
        return this.SequelizeModel.sequelize.options.dialect;
    }
    name() {
        return this.SequelizeModel.tableName;
    }
    id() {
        return this.SequelizeModel.tableName;
    }
    properties() {
        return Object.keys(this.rawAttributes()).map((key) => (new property_1.default(this.rawAttributes()[key])));
    }
    property(path) {
        const nested = path.split('.');
        // if property is an array return the array property
        if (nested.length > 1 && this.rawAttributes()[nested[0]]) {
            return new property_1.default(this.rawAttributes()[nested[0]]);
        }
        if (!this.rawAttributes()[path]) {
            return null;
        }
        return new property_1.default(this.rawAttributes()[path]);
    }
    async count(filter) {
        return this.SequelizeModel.count(({
            where: convert_filter_1.default(filter),
        }));
    }
    primaryKey() {
        return this.SequelizeModel.primaryKeyField || this.SequelizeModel.primaryKeyAttribute;
    }
    async populate(baseRecords, property) {
        const ids = baseRecords.map((baseRecord) => (baseRecord.param(property.name())));
        const records = await this.SequelizeModel.findAll({
            where: { [this.primaryKey()]: ids },
        });
        const recordsHash = records.reduce((memo, record) => {
            memo[record[this.primaryKey()]] = record;
            return memo;
        }, {});
        baseRecords.forEach((baseRecord) => {
            const id = baseRecord.param(property.name());
            if (recordsHash[id]) {
                const referenceRecord = new admin_bro_1.BaseRecord(recordsHash[id].toJSON(), this);
                baseRecord.populated[property.name()] = referenceRecord;
            }
        });
        return baseRecords;
    }
    async find(filter, { limit = 20, offset = 0, sort = {} }) {
        const { direction, sortBy } = sort;
        const sequelizeObjects = await this.SequelizeModel
            .findAll({
            where: convert_filter_1.default(filter),
            limit,
            offset,
            order: [[sortBy, (direction || 'asc').toUpperCase()]],
        });
        return sequelizeObjects.map((sequelizeObject) => new admin_bro_1.BaseRecord(sequelizeObject.toJSON(), this));
    }
    async findOne(id) {
        const sequelizeObject = await this.findById(id);
        if (!sequelizeObject) {
            return null;
        }
        return new admin_bro_1.BaseRecord(sequelizeObject.toJSON(), this);
    }
    async findMany(ids) {
        const sequelizeObjects = await this.SequelizeModel.findAll({
            where: {
                [this.primaryKey()]: { [sequelize_1.Op.in]: ids },
            },
        });
        return sequelizeObjects.map((sequelizeObject) => new admin_bro_1.BaseRecord(sequelizeObject.toJSON(), this));
    }
    async findById(id) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore versions of Sequelize before 5 had findById method - after that there was findByPk
        const method = this.SequelizeModel.findByPk ? 'findByPk' : 'findById';
        return this.SequelizeModel[method](id);
    }
    async create(params) {
        const parsedParams = this.parseParams(params);
        const unflattedParams = flat_1.unflatten(parsedParams);
        try {
            const record = await this.SequelizeModel.create(unflattedParams);
            return record.toJSON();
        }
        catch (error) {
            if (error.name === SEQUELIZE_VALIDATION_ERROR) {
                throw create_validation_error_1.default(error);
            }
            if (error.name === SEQUELIZE_UNIQUE_ERROR) {
                throw create_validation_error_1.default(error);
            }
            throw error;
        }
    }
    async update(id, params) {
        const parsedParams = this.parseParams(params);
        const unflattedParams = flat_1.unflatten(parsedParams);
        try {
            await this.SequelizeModel.update(unflattedParams, {
                where: {
                    [this.primaryKey()]: id,
                },
                individualHooks: true,
                hooks: false,
            });
            const record = await this.findById(id);
            return record.toJSON();
        }
        catch (error) {
            if (error.name === SEQUELIZE_VALIDATION_ERROR) {
                throw create_validation_error_1.default(error);
            }
            if (error.name === SEQUELIZE_UNIQUE_ERROR) {
                throw create_validation_error_1.default(error);
            }
            throw error;
        }
    }
    async delete(id) {
        // we find first because we need to invoke destroy on model, so all hooks
        // instance hooks (not bulk) are called.
        // We cannot set {individualHooks: true, hooks: false} in this.SequelizeModel.destroy,
        // as it is in #update method because for some reason it wont delete the record
        const model = await this.SequelizeModel.findByPk(id);
        await model.destroy();
    }
    /**
     * Check all params against values they hold. In case of wrong value it corrects it.
     *
     * What it does exactly:
     * - removes keys with empty strings for the `number`, `float` and 'reference' properties.
     *
     * @param   {Object}  params  received from AdminBro form
     *
     * @return  {Object}          converted params
     */
    parseParams(params) {
        const parsedParams = Object.assign({}, params);
        this.properties().forEach((property) => {
            const value = parsedParams[property.name()];
            if (value === '') {
                if (property.isArray() || property.type() !== 'string') {
                    delete parsedParams[property.name()];
                }
            }
            if (!property.isEditable()) {
                delete parsedParams[property.name()];
            }
        });
        return parsedParams;
    }
}
exports.default = Resource;
