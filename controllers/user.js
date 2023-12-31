const model = require("../models/User");
const bcrypt = require("bcrypt");
const { generateLogToken } = require("../utils");
const User = model.User;

// Create a new user
exports.createUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hashSync(req.body.password, 10),
    })
      .save()
      .then((doc) => {
        res.status(201).json(doc);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (error) {
    res.status(400).json({ message: "Error creating user" });
    throw new Error(error);
  }
};

//login
exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.status(201).send({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateLogToken(user),
        });
      } else {
        res.status(401).json({ message: "Invalid password" });
      }
    } else {
      res.status(401).json({ message: "Invalid email" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error logging in user" });
    throw new Error(error);
  }
};


exports.allUsers = async (req,res) => {
  try {
    const users = await User.find({}).select('-password')
    res.status(200).json(users)
  } catch (error) {
    throw new Error(error)
  }
}
