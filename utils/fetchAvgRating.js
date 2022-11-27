const Movie = require('../models/movie')

const fetchAvgRating = async (distinctMovies) => {
  let result = []
  for (let i = 0; i < distinctMovies.length; i++) {
    let imgBool = false
    let img
    const getAllMovie = await Movie.find({ name: distinctMovies[i] })
    let sum = 0
    let avg
    for (let j = 0; j < getAllMovie.length; j++) {
      sum = sum + getAllMovie[j].rating
      if (!imgBool) {
        if (getAllMovie[j].image) img = getAllMovie[j].image
        imgBool = true
      }
    }
    avg = (sum / getAllMovie.length).toFixed(2)
    result.push({ name: distinctMovies[i], avgRating: avg, image: img })
  }
  return result
}

module.exports = fetchAvgRating
