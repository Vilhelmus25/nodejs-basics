const yargs = require('yargs')
const { id, producer, title } = require('./option')
const MoviesApi = require('./movies.api')
const MoviesService = require('./movies.service')
const { dbFilePath, propName } = require('./config')            // így nem kell kézzel mindig módosítgatni itt, hanem elég a configban, ettől újrafelhasználhatóbb


const moviesApi = MoviesApi(dbFilePath, propName)             // a .json nem kötelező, de maradhat. A movies az a prop
const {
    getAllMovies,
    findMovieById,
    createMovie,
    editMovie,
    removeMovie
} = MoviesService(moviesApi)                    // nem require van, hanem meghívom a fv-t a fentiek segítségével


yargs
    .version('1.0.0')
    .usage('Usage: <command> [options]')        // ide fogja a parancs helyét behelyettesíteni 
    // .command('get', 'Get all movies', () => console.log(movies))
    .command({
        command: 'get',
        describe: 'Get all movies',
        handler: () => console.log(getAllMovies())
    })
    .command({
        command: 'find',
        describe: 'Find a movie by id',
        builder: { id },
        handler: ({ args }) =>
            console.log(findMovieById(args.id))

    })
    .command({
        command: 'create',
        describe: 'Create a new movie',
        builder: { producer, title },
        handler: (args) => {                                     // egy arrow function a handler
            console.log(createMovie(args))

        }
    })
    .command({
        command: 'edit',
        describe: 'Edit a movie',
        builder: { id, producer, title },
        handler: (args) => {
            console.log(editMovie(args))
        }
    })
    .command({
        command: 'remove',
        describe: 'Remove a movie by ID',
        builder: { id },
        handler: (args) => {
            removeMovie(args.id)
            console.log('deleted')
        }
    })
    .locale('en')                               // ez az alapértelmezett, a helper nyelve
    .strict()
    .help()
    .parse()                                    // process.args helyett, csak args-ként tudunk hivatkozni a parancsokra. 


