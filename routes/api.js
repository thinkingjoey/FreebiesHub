//This part of code is from the lab, please do not delete it but use it as a reference
// var router = require('express').Router();
// var studentsCtrl = require('../controllers/students');
// var factsCtrl = require('../controllers/facts');
//
// // GET /api/students
// router.get('/students', studentsCtrl.index);
//
//
// // POST /api/facts
// router.post('/facts', isLoggedIn, factsCtrl.create);
//
// // DELETE /api/facts/:id
// router.delete('/facts/:id', factsCtrl.delete);
//
// // middleware for routes that require a logged in user
// function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }
//
// module.exports = router;

//our codes start here
var router = require('express').Router();
var eventsController = require('../controllers/events')

router.post('/events', eventsController.index)

//GET

//POST

//DELETE

//UPDATE

module.exports = router;
