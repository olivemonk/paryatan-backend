const mongoose = require("mongoose");
const User = require("./User");

const { Schema } = mongoose;

const itinerarySchema = new Schema({
  day: { type: String, required: [true, "Day is required"] },
  location: { type: String, required: [true, "Location is required"] },
  coordinates: { type: String, required: [true, "Coordinates is required"] },
  time: { type: String, required: [true, "Time is required"] },
  cost: { type: String, required: [true, "Cost is required"] },
  description: { type: String, required: [true, "Description is required"] },
  howToTravel: { type: String, required: [true, "How to travel is required"] },
  category: { type: String, required: [true, "Category is required"] },
  tags: { type: [String], required: [true, "Tags is required"] },
});

const tripSchema = new Schema({
  title: { type: String, required: [true, "Title is required"] },
  startLocation: {
    type: String,
    required: [true, "Start Location is required"],
  },
  destination: { type: String, required: [true, "Destination is required"] },
  duration: { type: String, required: [true, "Duration is required"] },
  travelMode: { type: String, required: [true, "Travel Mode is required"] },
  startDate: { type: Date, required: [true, "Start Date is required"] },
  endDate: { type: Date, required: [true, "End Date is required"] },
  budget: { type: String, required: [true, "Budget is required"] },
  interests: { type: [String] },
  travelTime: { type: String, required: [true, "Travel Time is required"] },
  mustInlcude: { type: [String] },
  itinerary: {type: [itinerarySchema]},
  created_at: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  userEmail: { type: String, required: [true, "User Email is required"] },
});

exports.Trip = mongoose.model("Trip", tripSchema);
