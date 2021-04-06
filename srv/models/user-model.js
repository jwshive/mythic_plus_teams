const { Sequelize, DataTypes, Model } = require("sequelize");
const keys = require("../config/keys");
const sequelize = require("../config/database");

const User = sequelize.define("user", {
  battletag: { type: DataTypes.STRING, allowNull: false },
  bnetID: { type: DataTypes.INTEGER, allowNull: false },
  accessToken: { type: DataTypes.STRING, allowNull: false },
});
(async () => {
  await sequelize.sync({ force: true });
})();

module.exports = User;
