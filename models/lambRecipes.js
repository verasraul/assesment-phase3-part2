const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LambRecipes = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },

  origin_country: [{
    type: String,
    ref: "originCountry",
    required: false,
    trim: true,
    lowercase: true,
  }],

  ingredients: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,
  },

  picture: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

const Recipe = mongoose.model("lambRecipes", LambRecipes);

module.exports = Recipe;
