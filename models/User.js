var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    id: String,
    url: String,
    start: String,
    end: String
})

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  events: [eventSchema]
  });

module.exports = mongoose.model('User', userSchema);
