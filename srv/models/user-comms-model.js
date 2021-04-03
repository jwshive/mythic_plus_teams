const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-email");

const userCommsSchema = new Schema({
  bnetID: Number,
  emailAddress: {
    type: mongoose.SchemaTypes.Email,
    required: false,
    allowBlank: true,
  },
  discordName: { type: String, required: false },
});

const UserComm = mongoose.model("userComms", userCommsSchema);

module.exports = UserComm;
