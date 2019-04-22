const item = require("./todoItem");
const Validator = require("jsonschema").Validator;
const v = new Validator();

const models = {
	item: require("./todoItem")
};

module.exports = {
	addSchema: v.addSchema,
	validate: v.validate,

	check: (i, schema) =>
		new Promise((resolve, reject) => {
			if (!models[schema]) {
				return reject(`validation.notFound.${schema}`);
			}

      const result = v.validate(i, models[schema]);
      console.log(i)
			if (!result.valid) {
				return reject({
          message: `validation.failed.${schema}`,
          failedAt: collectErrorMessages(result)
        });
      }
      
			return resolve(i);
		})
};

const collectErrorMessages = (result) => result.errors.map(err => err.message);
