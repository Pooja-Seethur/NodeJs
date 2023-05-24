const mongoose = require('mongoose');

const placesModel = new mongoose.Schema({
    _id: mongoose.ObjectId(),
    name: {type: String, required: true},
    description: {type: String}
})

module.exports = mongoose.model('placeModel', placesModel);