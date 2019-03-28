const mongo = require("mongodb").MongoClient;

const config = {
	server: "mongodb",
	url: "localhost",
	port: "27017",
	database: "dashboard"
};

const address = `${config.server}://${config.url}:${config.port}/${config.database}`;

const connect = mongo.connect.bind(this, address);

const client = handler =>
	connect((err, _client) => {
		if (err) throw err;
		handler(_client.db(config.database));
	});

module.exports = {
	address,
	connect,
	config,
	client
};
