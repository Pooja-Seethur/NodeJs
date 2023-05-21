const express = require('express');
const router = express.Router();

//include controllers file where function logic is written
const placeControllers = require('../controllers/placesController');

//handle routes by specifying paths
router.get('/', placeControllers.placeById)

//make sure to export the router
module.exports = router;