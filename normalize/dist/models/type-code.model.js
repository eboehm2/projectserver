"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("./base.model");
class TypeCode extends base_model_1.BaseModel {
    constructor(options, name, api) {
        super(options, name, {
            id: { type: Number, key: 'primary', desc: `A numeric property used to identify ${name} record.`, nice_name: '' },
            code_name: { type: String, maxlength: 75, desc: '', nice_name: '' },
            nice_name: { type: String, maxlength: 75, desc: '', nice_name: '' },
            description: { type: String, maxlength: 75, desc: '', nice_name: '' },
        }, 'A table to store type codes. Type codes distinguish and group different types together.', [], api);
        this.options = options;
        this.name = name;
        this.api = api;
    }
}
exports.TypeCode = TypeCode;