const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

//app.use('/api/fleurs', require('./routes/fleurs'));
//app.use('/api/bouquets', require('./routes/bouquets'));

app.get('/', (req, res) => {
    res.send('Welcome to the TFTData');
});

module.exports = app; // utilisé par Jest