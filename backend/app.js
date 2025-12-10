const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/champions', require('../routes/champion'));
//app.use('/api/bouquets', require('./routes/bouquets'));

app.get('/', (req, res) => {
    res.send('Welcome to the TFT Hub');
});

module.exports = app; // utilisé par Jest