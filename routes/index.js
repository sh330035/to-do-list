// 載入 express & 啟用路由功能
const express = require('express')
const router = express.Router()

// 載入路由模組
const home = require('./modules/home')
const todos = require('./modules/todos')

// 設定路由模組
router.use('/', home)
router.use('/todos', todos)

// 匯出
module.exports = router
