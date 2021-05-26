const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    ingredient1:  String,
    ingredient2:  String,
    ingredient3:  String,
    ingredient4:  String,
    ingredient5:  String,
    image: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;