const mongoose = require('mongoose');

const recepeSchema = new mongoose.Schema({
    title: String,
    description: String,
    ingredient: String
});

const Recepe = mongoose.model('Recepe', recepeSchema);

module.exports = Recepe;