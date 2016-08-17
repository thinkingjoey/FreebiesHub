var express = require('express');

//don't touch
//Google API stuffs here

var router = express.Router();
var passport = require('passport');

// Billy told us to add these two lines to display
// Google user ID.  Since this is the _id property
// on req.user, no need to keep this code.
// var usersController = require('../controllers/users')
// router.get('/', usersController.home);

// The root route renders our only view
router.get('/', function(req, res) {
  res.render('index', { user: req.user });
});

router.get('/trials', function(req, res) {
  res.render('trials', { user: req.user });
});

router.get('/ebooks', function(req, res) {
  res.render('ebooks', { user: req.user });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
