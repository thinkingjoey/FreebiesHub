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
    // successRedirect : '/profile',
    successRedirect : '/',
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
//////////// Begin Users /////////////

var usersController = require('../controllers/users')

// put an event to the user's profile
router.post('/users', usersController.post)

// delete an event from the user's profile
router.delete('/users', usersController.destroy)

///////////// End Users //////////////
//////////////////////////////////////


//////////////////////////////////////
///////// Begin Uncontrolled /////////

// Root page
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

// Profile page
router.get('/profile', function(req, res) {
  res.render('profile', { user: req.user });
});

////////// End Uncontrolled //////////
//////////////////////////////////////


module.exports = router;

