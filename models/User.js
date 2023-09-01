const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email already exists"],
    validate: {
      validator: function (email) {
        // Using a simple regular expression for email validation
        return /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(email);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    validate: {
      validator: function (password) {
        // Password should be at least 6 characters long
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
      },
      message: "At least 8 char long contain 1 uppercase, 1 lowercase, 1 number and 1 special character",
    },
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

exports.User = mongoose.model("User", userSchema);
