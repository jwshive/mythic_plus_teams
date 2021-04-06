const { Sequelize, DataTypes, Model } = require("sequelize");
const keys = require("../config/keys");
const sequelize = require("../config/database");

const UserComm = sequelize.define("usercomm", {
  bnetID: { type: DataTypes.INTEGER, allowNull: false },
  emailAddress: {
    type: DataTypes.STRING,
    isUnique: true,
    lowercase: true,
    validate: { isEmail: true },
  },
  discordName: { type: DataTypes.STRING, allowNull: true },
});
(async () => {
  await sequelize.sync({ force: true });
})();

module.exports = UserComm;
