const movies = [
    { title: 'Flipper', emoji: 'dolphin' },
    { title: 'Game Of Thrones', emoji: 'winterface' },
    { title: 'Tenacious D', emoji: 'guitar' },
    { title: 'Harry Potter', emoji: 'lightning' },
    { title: 'Hunger Games', emoji: 'bird' },
    { title: 'Conan the Barbarian', emoji: 'swords' },
    { title: 'Tremors', emoji: 'worm' },
    { title: 'E.T. the Extra-Terrestrial', emoji: 'alien' }
]

const findMoviesByTitle = title =>
    movies.filter(movie => movie.title.includes(title))

module.exports = findMoviesByTitle