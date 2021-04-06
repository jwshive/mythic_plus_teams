const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userCharacterSchema = new Schema({
  bnetID: Number,
  name: String,
  id: Number,
  realm: String,
  realm_slug: String,
  class: String,
  active_spec: String,
  race: String,
  faction: String,
  level: Number,
});

const UserCharacter = mongoose.model("userCharacter", userCharacterSchema);

module.exports = UserCharacter;
