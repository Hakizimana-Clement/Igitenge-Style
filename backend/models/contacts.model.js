const mongoose = require("mongoose");
// create contact
const contactSchema = new mongoose.Schema({
  name: { type: String, requied: true },
  email: { type: String, requied: true },
  subject: [],
  message: { type: String, requied: true },
});
// create model
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
