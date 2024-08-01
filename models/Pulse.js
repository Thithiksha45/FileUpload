const mongoose = require('mongoose');

const PulseSchema = new mongoose.Schema({
  user: { type: String, required: true },
  rate: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pulse', PulseSchema);
