const express = require('express');
const router = express.Router();

const { signup, login, logout, requireLogin } = require('../controllers/auth');

// validators
const { runValidation } = require('../validators');
const {
  userSignupValidator,
  userSignInValidator,
} = require('../validators/auth');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/login', userSignInValidator, runValidation, login);
router.get('/logout', logout);

// test
router.get('/secret', requireLogin, (req, res) => {
  res.json({
    message: 'You have access to the secret page',
  });
});

module.exports = router;
