const express = require('express');
const router = express.Router();
const path = require('path');
const Champion = require('../models/Champion');

router.get('/', async (req, res) => {
    try {
        const champions = await Champion.find();
        res.status(200).json(champions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const champion = await Champion.findById(req.params.id);
        if (!champion) {
            return res.status(404).json({ error: 'Champion not found' });
        }
        res.status(200).json(champion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/pages/create', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'create.html'));
});

router.post('/', async (req, res) => {
    try {
        const newChampion = new Champion(req.body);
        const championRegistered = await newChampion.save();
        res.status(201).json(championRegistered);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedChampion = await Champion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedChampion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedChampion = await Champion.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedChampion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;