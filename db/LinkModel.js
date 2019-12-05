const Sequelize = require("sequelize");
const db = require("./database");

const LinkModel = db.define("link", {
	linkName: {
		type: Sequelize.STRING
	},
  clickCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

db.sync();

module.exports = LinkModel
