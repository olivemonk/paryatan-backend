const model = require("../models/Trip");
const Trip = model.Trip;

exports.createTrip = async (req, res) => {
  try {
    let trip = new Trip({
      title: req.body.title,
      startLocation: req.body.startLocation,
      destination: req.body.destination,
      duration: req.body.duration,
      travelMode: req.body.travelMode,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      budget: req.body.budget,
      interests: req.body.interests,
      travelTime: req.body.travelTime,
      mustInlcude: req.body.mustInlcude,
      itinerary: req.body.itinerary,
      user: req.body.user,
      userEmail: req.body.userEmail,
    })
      .save()
      .then((doc) => {
        res.status(201).json(doc);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (error) {
    res.status(400).json({ message: "Error creating trip" });
    throw new Error(error);
  }
};

exports.allTrips = async (req, res) => {
  try {
    const trips = await Trip.find({});
    if (trips.length !== 0) {
      res.status(201).json(trips);
    } else {
      res.status(201).json({ message: "No trips found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error getting all trips" });
    throw new Error(error);
  }
};

exports.userAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ userEmail: req.body.userEmail });
    if (trips.length !== 0) {
      res.status(201).json(trips);
    } else {
      res.status(201).json({ message: "No trips found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error getting all trips" });
    throw new Error(error);
  }
};
