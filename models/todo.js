const mongoose = require('mongoose')
const Schema = mongoose.Schema

// To do model
const todoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('todo', todoSchema)
