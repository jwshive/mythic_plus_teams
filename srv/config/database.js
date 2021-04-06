const { Sequelize } = require("sequelize");
const keys = require("../config/keys");

const sequelize = new Sequelize(keys.postgres.connectURL, {
  dialect: "postgres",
  logging: (...msg) => console.log(msg),
});

module.exports = sequelize;
