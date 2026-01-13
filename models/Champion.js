const mongoose = require('mongoose');

const championSchema = new mongoose.Schema({
    name: {type: String, required: true},
    cost: Number,
    health: Number,
    mana: Number,
    armor: Number,
    dps: Number,
    attackSpeed: Number,
    magicResist: Number,
    damage: Number,
    class: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
      }
    ]
});

module.exports = mongoose.model('Champion', championSchema);