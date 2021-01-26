"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const admin_bro_1 = require("admin-bro");
const chai_1 = __importStar(require("chai"));
const sinon_chai_1 = __importDefault(require("sinon-chai"));
const sinon_1 = __importDefault(require("sinon"));
const resource_1 = __importDefault(require("./resource"));
const property_1 = __importDefault(require("./property"));
chai_1.default.use(sinon_chai_1.default);
const config = require('../config/config')[process.env.NODE_ENV];
const db = require('../models/index.js');
describe('Resource', function () {
    let SequelizeModel;
    let resource;
    before(function () {
        SequelizeModel = db.sequelize.models.User;
        resource = new resource_1.default(SequelizeModel);
    });
    afterEach(async function () {
        await SequelizeModel.destroy({ where: {} });
    });
    describe('.isAdapterFor', () => {
        it('returns true when sequelize model is given', function () {
            chai_1.expect(resource_1.default.isAdapterFor(SequelizeModel)).to.equal(true);
        });
    });
    describe('#database', () => {
        it('returns correct database name', function () {
            chai_1.expect(resource.databaseName()).to.equal(config.database);
        });
    });
    describe('#databaseType', () => {
        it('returns correct database', function () {
            chai_1.expect(resource.databaseType()).to.equal(config.dialect);
        });
    });
    describe('#name', () => {
        it('returns correct name', function () {
            chai_1.expect(resource.name()).to.equal('Users');
        });
    });
    describe('#id', () => {
        it('returns correct name', function () {
            chai_1.expect(resource.id()).to.equal('Users');
        });
    });
    describe('#properties', () => {
        it('returns all properties', function () {
            const length = 8; // there are 8 properties in the User model (5 regular + __v and _id)
            chai_1.expect(resource.properties()).to.have.lengthOf(length);
        });
    });
    describe('#property', () => {
        it('returns given property', function () {
            chai_1.expect(resource.property('email')).to.be.an.instanceOf(property_1.default);
        });
        it('returns null when property doesn\'t exit', function () {
            chai_1.expect(resource.property('some.imagine.property')).to.be.null;
        });
        it('returns nested property for array field', function () {
            const property = resource.property('arrayed.1');
            chai_1.expect(property).to.be.an.instanceOf(property_1.default);
            chai_1.expect(property === null || property === void 0 ? void 0 : property.type()).to.equal('string');
        });
    });
    describe('#findMany', () => {
        it('returns array of BaseRecords', async function () {
            const params = await resource.create({ email: 'john.doe@softwarebrothers.co' });
            const records = await resource.findMany([params.id]);
            chai_1.expect(records).to.have.lengthOf(1);
            chai_1.expect(records[0]).to.be.instanceOf(admin_bro_1.BaseRecord);
        });
    });
    describe('#find with filter', () => {
        beforeEach(async function () {
            this.params = {
                gender: 'male',
                email: 'john.doe@softwarebrothers.co',
            };
            this.record = await resource.create(this.params);
        });
        it('returns 1 BaseRecord when filtering on ENUMS', async function () {
            const filter = new admin_bro_1.Filter({
                gender: 'male',
            }, resource);
            const records = await resource.find(filter, { limit: 20, offset: 0, sort: { direction: 'asc', sortBy: 'id' } });
            chai_1.expect(records).to.have.lengthOf(1);
            chai_1.expect(records[0]).to.be.instanceOf(admin_bro_1.BaseRecord);
            chai_1.expect(records[0].params.gender).to.equal('male');
        });
        it('returns 0 BaseRecord when filtering on ENUMS', async function () {
            const filter = new admin_bro_1.Filter({
                gender: 'female',
            }, resource);
            const records = await resource.find(filter, { limit: 20, offset: 0, sort: { direction: 'asc', sortBy: 'id' } });
            chai_1.expect(records).to.have.lengthOf(0);
        });
        it('returns error when filtering on ENUMS with invalid value', async function () {
            const filter = new admin_bro_1.Filter({
                gender: 'XXX',
            }, resource);
            try {
                await resource.find(filter, { limit: 20, offset: 0, sort: { direction: 'asc', sortBy: 'id' } });
            }
            catch (error) {
                chai_1.expect(error.name).to.eq('SequelizeDatabaseError');
            }
        });
    });
    describe('#count', () => {
        it('returns 0 when there are none elements', async function () {
            const count = await resource.count(new admin_bro_1.Filter({}, {}));
            chai_1.expect(count).to.equal(0);
        });
        it('returns given count without filters', async function () {
            await resource.create({ email: 'john.doe@softwarebrothers.co' });
            chai_1.expect(await resource.count(new admin_bro_1.Filter({}, {}))).to.equal(1);
        });
        it('returns given count for given filters', async function () {
            await resource.create({
                firstName: 'john',
                lastName: 'doe',
                email: 'john.doe@softwarebrothers.co',
            });
            await resource.create({
                firstName: 'andrew',
                lastName: 'golota',
                email: 'andrew.golota@softwarebrothers.co',
            });
            const filter = new admin_bro_1.Filter({
                email: 'andrew.golota@softwarebrothers.co',
            }, resource);
            chai_1.expect(await resource.count(filter)).to.equal(1);
        });
    });
    describe('#create', () => {
        context('correct record', () => {
            beforeEach(async function () {
                this.params = {
                    firstName: 'john',
                    lastName: 'doe',
                    email: 'john.doe@softwarebrothers.co',
                };
                this.record = await resource.create(this.params);
            });
            it('creates new user when data is valid', async function () {
                const newCount = await resource.count(null);
                chai_1.expect(newCount).to.equal(1);
            });
            it('returns an object', function () {
                chai_1.expect(this.record).to.be.an.instanceof(Object);
            });
        });
        context('record with errors', () => {
            beforeEach(async function () {
                this.params = {
                    firstName: '',
                    lastName: 'doe',
                    email: 'john.doe.co',
                };
            });
            it('throws validation error', async function () {
                try {
                    await resource.create(this.params);
                }
                catch (error) {
                    chai_1.expect(error).to.be.an.instanceOf(admin_bro_1.ValidationError);
                }
            });
        });
        context('record with empty id field', () => {
            beforeEach(function () {
                SequelizeModel = db.sequelize.models.Post;
                resource = new resource_1.default(SequelizeModel);
            });
            it('creates record without an error', async function () {
                this.params = {
                    title: 'some title',
                    description: 'doe',
                    publishedAt: '2019-12-10 12:00',
                    userId: '',
                };
                this.recordParams = await resource.create(this.params);
                chai_1.expect(this.recordParams.userId).to.be.null;
            });
        });
    });
    describe('#update', () => {
        beforeEach(async function () {
            SequelizeModel = db.sequelize.models.User;
            resource = new resource_1.default(SequelizeModel);
            this.params = {
                firstName: 'john',
                lastName: 'doe',
                email: 'john.doe@softwarebrothers.co',
            };
            this.record = await resource.create(this.params);
        });
        it('updates the title', async function () {
            this.newEmail = 'w@k.pl';
            const params = await resource.update(this.record.id, {
                email: this.newEmail,
            });
            chai_1.expect(params.email).to.equal(this.newEmail);
        });
        it('calls update hooks', async function () {
            const beforeUpdateSpy = sinon_1.default.spy();
            const afterUpdateSpy = sinon_1.default.spy();
            const beforeBulkUpdateSpy = sinon_1.default.spy();
            SequelizeModel.addHook('beforeUpdate', beforeUpdateSpy);
            SequelizeModel.addHook('beforeBulkUpdate', beforeBulkUpdateSpy);
            SequelizeModel.addHook('afterUpdate', afterUpdateSpy);
            await resource.update(this.record.id, { firstName: 'jack' });
            chai_1.expect(beforeUpdateSpy).to.have.been.called;
            chai_1.expect(afterUpdateSpy).to.have.been.called;
            chai_1.expect(beforeBulkUpdateSpy).not.to.have.been.called;
        });
    });
    describe('#delete', () => {
        beforeEach(async function () {
            SequelizeModel = db.sequelize.models.User;
            resource = new resource_1.default(SequelizeModel);
            this.params = {
                firstName: 'john',
                lastName: 'doe',
                email: 'john.doe@softwarebrothers.co',
            };
            this.record = await resource.create(this.params);
        });
        it('deletes the resource', async function () {
            await resource.delete(this.record.id);
            const newRecord = await resource.findOne(this.record.id);
            chai_1.expect(newRecord).to.be.null;
        });
        it('calls delete hooks', async function () {
            const beforeDestroySpy = sinon_1.default.spy();
            const afterDestroySpy = sinon_1.default.spy();
            const beforeDestroyUpdateSpy = sinon_1.default.spy();
            SequelizeModel.addHook('beforeDestroy', beforeDestroySpy);
            SequelizeModel.addHook('beforeBulkDestroy', beforeDestroyUpdateSpy);
            SequelizeModel.addHook('afterDestroy', afterDestroySpy);
            await resource.delete(this.record.id);
            chai_1.expect(beforeDestroySpy).to.have.been.called;
            chai_1.expect(afterDestroySpy).to.have.been.called;
            chai_1.expect(beforeDestroyUpdateSpy).not.to.have.been.called;
        });
    });
});
