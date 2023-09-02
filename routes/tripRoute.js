const express = require("express");
const tripController = require('../controllers/trip')

const router = express.Router();
router
    .post('/create', tripController.createTrip)
    .post('/all', tripController.allTrips)
    .get('/user', tripController.userTrips)

exports.router = router;