// module setting
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const todo = require('./models/todo')

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
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  // 取得資料
  todo
    .find()
    .lean() // 把資料轉換成單純的 JS object
    .then((todos) => res.render('index', { todos }))
    .catch((error) => console.log(error))
})

app.get('/todos/new', (req, res) => {
  res.render('new')
})

app.post('/todos', (req, res) => {
  const name = req.body.name

  todo
    .create({ name })
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

// server listener
app.listen(port, () => {
  console.log(`Express runnning on port ${port}`)
})
