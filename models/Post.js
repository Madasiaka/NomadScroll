const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  hostelName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  formattedAddress: {
    type: String,
    required: false,
  },
  coordinates: {
    type: Array,
    required: false,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  dateVisited: {
    type: Date,
    require: true,
  },
  review: {
    type: String,
    required: true,
  },
  quickReview: {
    type: String,
    enum: ['Yah', 'Nah'],
    required: true,
  },
  friendsMet:  {
    type: Array,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

postSchema.index({ name: 'text' })

module.exports = mongoose.model("Post", postSchema);
