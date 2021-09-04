const mongoose = require('mongoose')
const user = new mongoose.Schema({
  username: String,
  password: String,
  contacts: [
    {
      name: String,
      number: String,
      avatar: String,
      linkedin: String,
      facebook: String,
      twitter: String
    }
  ]
})

module.exports = mongoose.model('User', user)