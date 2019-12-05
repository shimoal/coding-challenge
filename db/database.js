const Sequelize = require("sequelize");
const config = require("./db_config");

const { db, username, password, host, port } = config;

const database = new Sequelize(db, username, password, {
	host,
	port,
	dialect: "postgres"
});

database
	.authenticate()
	.then(function(err) {
		console.log("Connection has been established successfully.");
	})
	.catch(function(err) {
		console.log("Unable to connect to the database:", err);
	});

module.exports = database;
