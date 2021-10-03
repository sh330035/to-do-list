// module setting
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const port = 3000

// connect with mongoose
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
})

app.get('/', (req, res) => {
  res.send('hello world')
})

// server listener
app.listen(port, () => {
  console.log(`Express runnning on port ${port}`)
})
