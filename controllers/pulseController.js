const Pulse = require('../models/Pulse');

exports.getPulses = async (req, res) => {
  try {
    const pulses = await Pulse.find();
    res.json(pulses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addPulse = async (req, res) => {
  const { user, rate } = req.body;
  
  if (!user || !rate) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newPulse = new Pulse({ user, rate });
    await newPulse.save();
    res.status(201).json(newPulse);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
