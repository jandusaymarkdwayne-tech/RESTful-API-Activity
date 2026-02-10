const mongoose = require('mongoose');
const dishSchema = new mongoose.Schema({

name: {
  type: String,
  required: true,
  unique: true,
},

price: {
  type: Number,
  required: true,
  min: [0, 'Price must be a positive number'],
  max: [1000, 'Price must be less than 1000'],
},

category: {
  type: String,
  num: ['Starters', 'Main', 'Dessert', 'Drinks'],
  required: true,
  message: 'Category must be one of: Starters, Main, Dessert, Drinks',
},

isVegetarian: {
  type: Boolean,
  default: false,
},

reviews: [{
  user: String,
  rating: { type: Number, min: 1, max: 5 },
  comment: String
}],

chef: {
  type: mongoose.Schema.Types.ObjectId, // This is a "Link"
  ref: 'Chef' // Pointing to the Chef model
}
});

module.exports = mongoose.model('Dish', dishSchema);