var event = require('../models/Event');

// function index(req, res) {
  //This part of code is from the lab, please do not delete
  //We use it as a reference
    // Student.find({}, function(err, students) {
    //   if (err) return res.status(err.statusCode || 500).json(err);
    //   res.json(students);
    // });
// }

var rp = require('request-promise')

function index (req, res, next) {
    // var location = "Alhambra, CA"
    // var radius = 50
    // var firstDate = "2016-08-20"
    // var lastDate = "2016-08-21"
    // var keywords = "concert"

    var location = req.body.location
    var radius = req.body.radius
    var firstDate = req.body.firstDate
    var lastDate = req.body.lastDate
    var keywords = req.body.keywords
    console.log(keywords)
    var ebq = rp.get({
        uri: `https://www.eventbriteapi.com/v3/events/search/?sort_by=distance&location.address=${location}&location.within=${radius}mi&price=free&start_date.range_start=${firstDate}T00%3A00%3A01&start_date.range_end=${lastDate}T23%3A59%3A59&q=${keywords}&token=${process.env.EB_TOKEN}`,
        json: true
    })
    ebq.then(response => {
        res.json(response);
    }).catch(err => console.log(err))
}

module.exports = {
  index: index
};

