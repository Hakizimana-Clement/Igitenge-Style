const mongoose = require("mongoose");

// create review schema
const reviewsSchema = mongoose.Schema({
  namee: { type: String, required: true },
  review: { type: String, required: true, maxlength: 100 },
});
// create model

const Review = mongoose.model("Review", reviewsSchema);

module.exports = Review;
