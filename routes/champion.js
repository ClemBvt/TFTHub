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

// Create a new champion
router.post('/api', async (req, res) => {
    try {
        const newChampion = new Champion(req.body);
        const championSaved = await newChampion.save();
        res.status(201).json(championSaved);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all champions
router.get('/api', async (req, res) => {
    try {
        const champions = await Champion.find();
        res.status(200).json(champions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get a specific champion
router.get('/api/:id', async (req, res) => {
    try {
        const champion = await Champion.findById(req.params.id);
        res.status(200).json(champion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a champion
router.put('/api/:id', async (req, res) => {
    try {
        const updatedChampion = await Champion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedChampion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a champion
router.delete('/api/:id', async (req, res) => {
    try {
        const deletedChampion = await Champion.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedChampion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;