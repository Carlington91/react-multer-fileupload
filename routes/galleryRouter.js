const express = require('express')
const router = express.Router()
const { create, readAll } = require('../controller/galleryController')


router.get('/gallery', readAll)
router.post('/uploads', create)

module.exports = router