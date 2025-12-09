const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/TFTHub');
    console.log('Connected to MongoDB TFT hub database');
    } catch (err) {
    console.error('Error connecting to MongoDB TFT hub database:', err);
    }
};

module.exports = connectDB;