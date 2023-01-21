const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const apiController = require('./apiController')

router.get('/', dataController.index, apiController.index)
router.post('/', dataController.create, apiController.show)
router.get('/:id', dataController.show, apiController.show)

module.exports = router
