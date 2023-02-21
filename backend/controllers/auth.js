const User = require('../models/user');
const shortId = require('shortid');
const jwt = require('jsonwebtoken');
const { expressjwt } = require('express-jwt');

exports.signup = (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({ error: 'Email is already taken' });
    }
    let username = shortId.generate();
    let profile = `${process.env.CLIENT_URL}/profile/${username}`;
    let newUser = new User({ name, email, password, profile, username });
    newUser.save((err, success) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      res.json({ message: 'Signup success! Please sign in' });
    });
  });
};

exports.login = (req, res) => {
  // check if user exits
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User with that email does not exist. Please sign up',
      });
    }
    // authenticate - passwords should match
    if (!user.authenticate(req.body.password)) {
      return res.status(400).json({
        error: 'Email and password do not match',
      });
    }
    // generate a token and send to client
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY,
    });
    res.cookie('token', token, { expiresIn: process.env.JWT_EXPIRY });
    const { _id, username, name, email, role } = user;
    return res.json({ token, user: { _id, username, name, email, role } });
  });
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'logout success' });
};

// It will check the incoming token secret and compare it to the secret in the env file
// if the token hasn't expired, it will return true
exports.requireLogin = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
});
