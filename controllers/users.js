var User = require('../models/User')
var passport = require('passport');

function post (req, res) {
    if (req.user) {
        User.findOne({googleId: req.user.googleId }, function (err, user) {
            if (user.events) {
                if(user.events.indexOf(req.body.etid) < 0) {
                    user.events.push(req.body.etid)
                }
            } else {
                user.events = [req.body.etid]
            }
            user.save(function(err) {
                if(err) {
                    res.json({ error: true, failedSave: true })
                } else {
                    res.json({ etid: req.body.etid })
                }
            });
        })
    } else {
        res.json({ error: true })
    }
}

function destroy (req, res) {
    if (req.user) {
        User.findOne({googleId: req.user.googleId }, function (err, user) {
            if (user.events) {
                console.log("ETID:", req.body.etid)
                if(user.events.indexOf(req.body.etid) > -1) {
                    user.events.splice( user.events.indexOf(req.body.etid), 1 )
                }
            }
            user.save(function(err) {
                console.log(user)
                if(err) {
                    res.json({ error: true, failedDelete: true })
                } else {
                    res.json({ etid: req.body.etid })
                }
            });
        })
    } else {
        res.json({ error: true })
    }
}

module.exports = {
    post: post,
    destroy: destroy,
    // show: show,
}


// function profile (req, res, next) {
//   if(req.user) {
//     res.redirect('/profile');
//   }
// };
