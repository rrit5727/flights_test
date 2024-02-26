const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
   airport: [String],
   arrival: Date
});

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs	: Date,
    destinations: [destinationSchema] 
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Flight', flightSchema);