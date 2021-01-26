"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const escape_regexp_1 = __importDefault(require("escape-regexp"));
const sequelize_1 = require("sequelize");
const convertFilter = (filter) => {
    if (!filter) {
        return {};
    }
    return filter.reduce((memo, filterProperty) => {
        const { property, value } = filterProperty;
        switch (property.type()) {
            case 'string':
                if (property.sequelizePath.values) {
                    return Object.assign({ [property.name()]: { [sequelize_1.Op.eq]: `${escape_regexp_1.default(value)}` } }, memo);
                }
                return Object.assign({ [sequelize_1.Op.and]: [
                        ...(memo[sequelize_1.Op.and] || []),
                        {
                            [`${property.name()}`]: {
                                [sequelize_1.Op.iLike]: `%${escape_regexp_1.default(value)}%`,
                            },
                        },
                    ] }, memo);
            case 'number':
                if (!Number.isNaN(Number(value))) {
                    return Object.assign({ [property.name()]: Number(value) }, memo);
                }
                return memo;
            case 'date':
            case 'datetime':
                if (value.from || value.to) {
                    return Object.assign({ [property.name()]: Object.assign(Object.assign({}, value.from && { [sequelize_1.Op.gte]: value.from }), value.to && { [sequelize_1.Op.lte]: value.to }) }, memo);
                }
                break;
            default:
                break;
        }
        return Object.assign({ [property.name()]: value }, memo);
    }, {});
};
exports.default = convertFilter;
