var router = require('express').Router();
var eventsController = require('../controllers/events')

router.post('/events', eventsController.index)
router.get('/events', eventsController.show)

//GET

//POST

//DELETE

//UPDATE

module.exports = router;
