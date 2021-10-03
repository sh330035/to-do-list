const mongoose = require('mongoose')
const Schema = mongoose.Schema

// To do model
const todoSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('ToDo', todoSchema)
