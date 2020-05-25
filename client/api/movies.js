import request from 'superagent'

export function getMovies (title) {
  return request.get(`/api/v1/${title}`)
    .then(res => {
      return res
    })
}
