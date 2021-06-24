let movies = require('./database/movies')

const getAllMovies = () => movies

const findMovieById = (id) => movies.find(movie => movie.id === id)

const generateNewMovieId = () => {
    const sortedMovies = [...movies].sort((a, b) => a.id > b.id)        // sorbarendezés id alapján, majd hozzácsapjuk
    return sortedMovies[sortedMovies.length - 1].id + 1
}            // az id-t növeljük eggyel

const createMovie = ({ producer, title }) => {
    const movie = { id: generateNewMovieId(), producer, title }                               // az új movie object
    movies = [...movies, movie]                                         // spread operator, a teljes objectet lecseréli erre az újra, olyan mint egy push
    return movie
}

const editMovie = ({ id, title, producer }) => {
    movies = movies.map(movie => movie.id === id ? { id, producer, title } : movie)     // ha stimmel a movie id-ja a paraméterül kapottéval, akkor módosítani kell ezt a moviet, különben, dobjuk vissza az eredeti movie-t, mert nem kellett módosítani
    return findMovieById(id)
}

const removeMovie = (id) => {
    movies = movies.filter(movie => movie.id !== id)        // adja vissza az összeset, aminek az id-ja nem egyezik a megadottéval
}

module.exports = Object.freeze({
    getAllMovies,
    findMovieById,
    createMovie,
    editMovie,
    removeMovie
})