const mongoose = require('mongoose')
const user = new mongoose.Schema({
  username: String,
  password: String,
  contacts: [
    {
      name: String,
      phone: String
    }
  ]
})

module.exports = mongoose.model('User', user)