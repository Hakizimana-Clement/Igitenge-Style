const mongoose = require("mongoose");

// create BillAddress schema
const BillAddressSchema = new mongoose.Schema({
  country: { type: String, required: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  aparment: { type: String, required: true },
  city: { type: String, required: true },
});
// create model

const BillAddress = mongoose.model("Review", BillAddressSchema);

module.exports = BillAddress;
