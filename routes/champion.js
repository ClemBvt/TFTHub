const express = require('express');
const router = express.Router();
const Champion = require('../models/Champion');

router.post('/', async (req, res) => {
    try {
        const newChampion = new Champion(req.body);
        const championRegistered = await newChampion.save();
        res.status(200).json(championRegistered);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const fleurs = await Fleur.find();
        res.status(200).json(fleurs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const fleur = await Fleur.findById(req.params.id);
        res.status(200).json(fleur);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedFleur = await Fleur.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedFleur);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedFleur = await Fleur.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedFleur);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;