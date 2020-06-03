import request from 'superagent'

export function getMovies (title) {
  return request.get(`/api/v1/movie/${title}`)
    .then(res => {
      return res
    })
}

export function getMoviePage (page, movie) {
  return request.get(`/api/v1/page/${page}/${movie}`)
    .then(res => {
      return res
    })
}
