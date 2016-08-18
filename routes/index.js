//Google API stuffs here
var express = require('express');
var router = express.Router();
var passport = require('passport');
var usersController = require('../controllers/users')

// Billy told us to add these two lines to display
// Google user ID.  Since this is the _id property
// on req.user, no need to keep this code.
// var usersController = require('../controllers/users')
// router.get('/', usersController.home);


// The root route renders our only view
router.get('/', function(req, res) {
  res.render('index', { user: req.user });
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
    //chnaging from '/' to '/profile'
    successRedirect : '/profile',
    failureRedirect : '/'
  }
));

//go to the user's profile
router.get('/profile', function(req, res) {
  res.render('profile', { user: req.user });
});


// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
