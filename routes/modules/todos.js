const express = require('express')
const router = express.Router()
const todo = require('../../models/todo')

// create page
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const name = req.body.name

  todo
    .create({ name })
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

// detail page
router.get('/:id', (req, res) => {
  const id = req.params.id

  todo
    .findById(id)
    .lean()
    .then((todo) => res.render('detail', { todo }))
    .catch((error) => console.log(error))
})

// edit page
router.get('/:id/edit', (req, res) => {
  const id = req.params.id

  todo
    .findById(id)
    .lean()
    .then((todo) => res.render('edit', { todo }))
    .catch((error) => console.log(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  // 解構賦值
  const { name, isDone } = req.body

  todo
    .findById(id)
    .then((todo) => {
      todo.name = name
      todo.isDone = isDone == 'on'

      return todo.save()
    })
    .then(() => res.redirect(`/todos/${id}`))
    .catch((error) => console.log(error))
})

// delete route
router.delete('/:id', (req, res) => {
  const id = req.params.id

  todo
    .findById(id)
    .then((todo) => todo.remove())
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

module.exports = router
