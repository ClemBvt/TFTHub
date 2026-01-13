const express = require('express');
const router = express.Router();
const path = require('path');
const Champion = require('../models/Champion');

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'champions.html'));
});

router.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'create.html'));
});

router.post('/', async (req, res) => {
    try {
        const newChampion = new Champion(req.body);
        const championRegistered = await newChampion.save();
        res.status(200).json(championRegistered);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;