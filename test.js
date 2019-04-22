const Validator = require('jsonschema').Validator;
const v = new Validator();

const schema = {
	type: "object",
	properties: {
		title: {
			type: "string"
		},
		created: { type: "string" },
		done: { type: "boolean" }
	},
	required: ["title"]
};

const item = {
  age: 123
}

console.log(v.validate(item, schema));