const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
  Brand: {
    type: String,
    required: true,
  },
  Model: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
  Fuel: {
    type: String,
    required: true,
  },
  Engine: {
    type: String,
    required: true,
  },
  Body: {
    type: String,
    required: true,
  },
  Seats: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
});

var vehicleModel = mongoose.model('vehicleModel', ModelSchema);
module.exports = vehicleModel;
