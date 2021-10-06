const express = require('express')
const router = express.Router()
// 載入 todo model
const todo = require('../../models/todo')

// 定義首頁 route
router.get('/', (req, res) => {
  // 取得資料
  todo
    .find()
    .lean() // 把資料轉換成單純的 JS object
    .sort({ _id: 'asc' }) // 依據id升冪排列
    .then((todos) => res.render('index', { todos }))
    .catch((error) => console.log(error))
})

// export
module.exports = router
