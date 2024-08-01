const express = require('express');
const { getPulses, addPulse } = require('../controllers/pulseController');
const router = express.Router();

router.get('/', getPulses);
router.post('/', addPulse);

module.exports = router;
