const { Sequelize, DataTypes, Model } = require("sequelize");
const keys = require("../config/keys");
const sequelize = require("../config/database");

const UserCharacter = sequelize.define("usercharacter", {
  bnetID: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  realm: { type: DataTypes.STRING, allowNull: false },
  realm_slug: { type: DataTypes.STRING, allowNull: false },
  class: { type: DataTypes.STRING, allowNull: false },
  active_spec: { type: DataTypes.STRING, allowNull: false },
  race: { type: DataTypes.STRING, allowNull: false },
  faction: { type: DataTypes.STRING, allowNull: false },
  level: { type: DataTypes.INTEGER, allowNull: false },
});
(async () => {
  await sequelize.sync({ force: true });
})();

module.exports = UserCharacter;
