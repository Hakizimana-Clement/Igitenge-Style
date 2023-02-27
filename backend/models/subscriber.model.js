const mongoose = require("mongoose");

// create email schema
const emailSchema = new mongoose.Schema({
  email: { type: String, required: true },
});
// create model
const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
