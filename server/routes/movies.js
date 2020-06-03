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

router.get('/page/:page/:movie', (req, res) => {
  const movie = req.params.movie
  const page = req.params.page
  return request.get(`http://omdbapi.com/?apikey=69495595&s=${movie}&page=${page}`)
    .then(apiRes => {
      res.json(JSON.parse(apiRes.text))
    })
})

module.exports = router
