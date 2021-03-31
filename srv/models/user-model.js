const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-email");

const userSchema = new Schema({
  battletag: String,
  bnetID: Number,
  emailAddress: { type: mongoose.SchemaTypes.Email, required: false },
  discordName: { type: String, required: false },
  accessToken: String,
});

const User = mongoose.model("user", userSchema);

module.exports = User;
