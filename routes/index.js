var express = require('express');
var router = express.Router();

//////////////////////////////////////
////////// Begin Google API //////////
var passport = require('passport');

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    // Change from '/' to '/profile'
    successRedirect : '/profile',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

//////////  End Google API  //////////
//////////////////////////////////////


//////////////////////////////////////
///////// Begin landing page /////////

// The root route renders our only view
router.get('/', function(req, res) {
  res.render('index', { user: req.user });
});

// Free trials page
router.get('/trials', function(req, res) {
  res.render('trials', { user: req.user });
});

// Free ebooks page
router.get('/ebooks', function(req, res) {
  res.render('ebooks', { user: req.user });
});

////////// End landing page //////////
//////////////////////////////////////


//////////////////////////////////////
//////////// Begin Users /////////////

// Mike's Deprecated Code
// var usersController = require('../controllers/users')
// router.get('/profile', usersController.show);

//go to the user's profile
router.get('/profile', function(req, res) {
  res.render('profile', { user: req.user });
});

///////////// End Users //////////////
//////////////////////////////////////

module.exports = router;
