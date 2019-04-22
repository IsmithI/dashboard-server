module.exports = {
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
