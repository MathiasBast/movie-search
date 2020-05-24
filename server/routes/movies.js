const express = require('express')
const router = express.Router()
const request = require('superagent')

router.get('/:title')

module.exports = router