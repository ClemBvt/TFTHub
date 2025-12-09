const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/TFTData');
    console.log('Connected to MongoDB TFTData database');
    } catch (err) {
    console.error('Error connecting to MongoDB TFTData database:', err);
    }
};

module.exports = connectDB;