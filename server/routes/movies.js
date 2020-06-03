const express = require('express')
const router = express.Router()
const request = require('superagent')

router.get('/movie/:title', (req, res) => {
  const title = req.params.title
  return request.get(`http://omdbapi.com/?apikey=69495595&s=${title}`)
    .then(apiRes => {
      res.json(JSON.parse(apiRes.text))
    })
})

module.exports = router
