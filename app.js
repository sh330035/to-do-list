// module setting
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

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

// template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

// server listener
app.listen(port, () => {
  console.log(`Express runnning on port ${port}`)
})
