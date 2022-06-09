const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OriginCountry = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },

  country: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,
  },

  moto: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,
  },
});

const Origins = mongoose.model("originCountry", OriginCountry);

module.exports = Origins;
