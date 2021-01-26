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
const chai_1 = __importStar(require("chai"));
const sinon_chai_1 = __importDefault(require("sinon-chai"));
const property_1 = __importDefault(require("./property"));
chai_1.default.use(sinon_chai_1.default);
const db = require('../models/index.js');
const getRawProperty = (modelName, propertyName) => {
    const model = db.sequelize.models[modelName];
    const propertyAttrs = model.attributes || model.rawAttributes;
    return propertyAttrs[propertyName];
};
describe('Property', () => {
    describe('#isArray', () => {
        it('returns false for regular (not arrayed) property', () => {
            const property = new property_1.default(getRawProperty('User', 'email'));
            chai_1.expect(property.isArray()).to.equal(false);
        });
        it('returns true for array property', () => {
            const property = new property_1.default(getRawProperty('User', 'arrayed'));
            chai_1.expect(property.isArray()).to.equal(true);
        });
    });
    describe('#type', () => {
        it('returns correct string type', () => {
            const property = new property_1.default(getRawProperty('User', 'firstName'));
            chai_1.expect(property.type()).to.equal('string');
        });
        it('returns correct integer type', () => {
            const property = new property_1.default(getRawProperty('User', 'id'));
            chai_1.expect(property.type()).to.equal('number');
        });
        it('returns correct date type', () => {
            const property = new property_1.default(getRawProperty('User', 'createdAt'));
            chai_1.expect(property.type()).to.equal('datetime');
        });
        it('returns string when property is an array of strings', () => {
            const property = new property_1.default(getRawProperty('User', 'arrayed'));
            chai_1.expect(property.type()).to.equal('string');
        });
    });
    describe('#availableValues', () => {
        it('returns null for all standard (Non enum) values', () => {
            const property = new property_1.default(getRawProperty('User', 'email'));
            chai_1.expect(property.availableValues()).to.equal(null);
        });
        it('returns array of values for the enum field', () => {
            const property = new property_1.default(getRawProperty('User', 'gender'));
            chai_1.expect(property.availableValues()).to.deep.equal(['male', 'female']);
        });
    });
    describe('#isEditable', () => {
        it('returns false for UUID property', () => {
            const property = new property_1.default(getRawProperty('Comment', 'id'));
            chai_1.expect(property.isEditable()).to.equal(false);
        });
    });
    describe('#isId', () => {
        it('returns true for id when its default', () => {
            const property = new property_1.default(getRawProperty('User', 'id'));
            chai_1.expect(property.isId()).to.eq(true);
        });
        it('returns true for id when its uuid', () => {
            const property = new property_1.default(getRawProperty('Comment', 'id'));
            chai_1.expect(property.isId()).to.eq(true);
        });
    });
    describe('isRequired', () => {
        it('returns true for required fields', () => {
            const property = new property_1.default(getRawProperty('User', 'email'));
            chai_1.expect(property.isRequired()).to.equal(true);
        });
        it('returns false for not required fields', () => {
            const property = new property_1.default(getRawProperty('User', 'gender'));
            chai_1.expect(property.isRequired()).to.eq(false);
        });
    });
});
