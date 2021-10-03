const mongoose = require('mongoose')
const todo = require('../todo')

mongoose.connect('mongodb://localhost/todoList', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// mongodb status
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!!')
})

db.once('open', () => {
  console.log('mongodb connected!!')

  for (let i = 0; i < 10; i++) {
    todo.create({
      name: `name-${i}`
    })
  }

  console.log('done.')
})
