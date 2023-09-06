const express = require("express");
const tripController = require('../controllers/trip')

const router = express.Router();
router
    .post('/create', tripController.createTrip)
    .post('/usertrip', tripController.userAllTrips)
    .get('/alltrip',tripController.allTrips)

exports.router = router;