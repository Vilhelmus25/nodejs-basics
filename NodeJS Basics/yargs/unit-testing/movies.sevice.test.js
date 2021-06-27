const MoviesService = require('./movies.service')
// itt telepítettünk egy csomagot:      npm i @types/jest

const moviesApi = jest.createMockFromModule('./movies.api.js')      // kimockoljuk az egész fájlt a movies.service-t

const movies = [{ id: 1, title: 'Title', producer: 'Producer' }]
// itt meg lehet mondani, hogy mit csináljon a get és a save fv. nem muszáj, csak akkor ha használja a tesztis, de itt használja
moviesApi.get = jest.fn(() => movies)           // csak visszaadja a moviest
moviesApi.save = jest.fn()

// triviális dolgokat nem tesztelünk, get/set..
const { findMovieById, createMovie, editMovie, removeMovie } = MoviesService(moviesApi)


describe('MoviesService', () => {
    // beforeAll(() => {           // itt a tesztjeink előtt futtatja le

    // })
    // beforeEach(() => {       // minden teszt előtt lefuttatja

    // })
    test('findMovieById() should return a movie', () => {
        expect(findMovieById(1)).toEqual(movies[0])
    })

    test('createMovie() should return a new movie', () => {
        const payload = { title: 'New Title', producer: 'New Producer' }
        expect(createMovie(payload)).toMatchObject(payload)         // megnézi, hogy az amit kapunk visszatérési értéknek, az megegyezik-e a payload formájával és tartalmával
        expect(moviesApi.save).toBeCalled()                     // meghívódott-e
    })

    test('editMovie() should return the modified movie', () => {
        const payload = { id: 1, title: 'New Title', producer: 'New Producer' }
        expect(editMovie(payload)).toEqual(payload)         // itt már lehet az equal, mert a felsőnél az id-t nem nézhette
        expect(moviesApi.save).toBeCalled()                     // meghívódott-e
    })
    test('removeMovie() should return endefined', () => {
        expect(removeMovie(1)).toBeUndefined()         // az egyet adom meg neki paraméterül id-nak
        expect(moviesApi.save).toBeCalled()                     // meghívódott-e
    })
})


