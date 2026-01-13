const express = require('express');
const router = express.Router();
const path = require('path');
const Champion = require('../models/Champion');

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'champions.html'));
});

// Serve the create champion page
router.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'create.html'));
});

module.exports = router;