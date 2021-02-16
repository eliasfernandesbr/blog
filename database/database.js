const Sequelize = require("sequelize");

const connection = new Sequelize(
    "blog",
    "root",
    "409079",{
        host: "localhost",
        dialect: "mysql"
    }
);

module.exports = connection;