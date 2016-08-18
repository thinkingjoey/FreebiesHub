// function profile (req, res, next) {
//   if(req.user) {
//     res.redirect('/profile');
//   }
// };

var User = require('../models/User')

// function show (req, res, next) {
//     User.findOne({googleId: req.user.googleId }, function (err, user) {
//         if (err) console.log(err)
//         res.render('dashboard', { user: user })
//         // res.json(user)
//         }
//     )
// }

module.exports = {
    // show: show,
}
