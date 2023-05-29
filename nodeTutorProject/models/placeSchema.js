const mongoose = require('mongoose');

const placesModel = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    location: {
        lat: {type: String},
        long: {type: String}
    },
    address: {type: String},
    creator: {type: String}
})

module.exports = mongoose.model('placeModel', placesModel);