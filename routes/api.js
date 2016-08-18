var router = require('express').Router();
var eventsController = require('../controllers/events')

router.post('/events', eventsController.index)

//GET

//POST

//DELETE

//UPDATE

module.exports = router;
