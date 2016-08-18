var rp = require('request-promise')

function index (req, res, next) {

    var location = req.body.location == "" ? `&location.address=Alhambra,CA` : `&location.address=${req.body.location}`
    var radius = req.body.radius == "" ? `&location.within=10mi` : `&location.within=${req.body.radius}mi`
    var firstDate = req.body.firstDate == "" ? "" : `&start_date.range_start=${req.body.firstDate}T00%3A00%3A01`
    var lastDate = req.body.lastDate == "" ? "" : `&start_date.range_end=${req.body.lastDate}T23%3A59%3A59`
    var keywords = req.body.keywords == "" ? "" : `&q=${req.body.keywords}`

    // var location = req.body.location
    // var radius = req.body.radius
    // var firstDate = req.body.firstDate
    // var lastDate = req.body.lastDate
    // var keywords = req.body.keywords

    var user = req.body.user

    var ebq = rp.get({
        // uri: `https://www.eventbriteapi.com/v3/events/search/?sort_by=distance&location.address=${location}&location.within=${radius}mi&price=free&start_date.range_start=${firstDate}T00%3A00%3A01&start_date.range_end=${lastDate}T23%3A59%3A59&q=${keywords}&token=${process.env.EB_TOKEN}`,
        uri: `https://www.eventbriteapi.com/v3/events/search/?sort_by=distance&price=free${location}${radius}${firstDate}${lastDate}${keywords}&token=${process.env.EB_TOKEN}`,
        json: true
    })
    ebq.then(response => {
        res.json({
            ebres: response,
            // location: location,
            // radius: radius,
            // firstDate: firstDate,
            // lastDate: lastDate,
            // keywords: keywords,
            user: user
        });
    }).catch(err => console.log(err))
}

module.exports = {
  index: index
};
