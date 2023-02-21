const express = require('express');
const router = express.Router();

const { signup, login } = require('../controllers/auth');

// validators
const { runValidation } = require('../validators');
const {
  userSignupValidator,
  userSignInValidator,
} = require('../validators/auth');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/login', userSignInValidator, runValidation, login);

module.exports = router;
