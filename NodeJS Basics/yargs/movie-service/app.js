const yargs = require('yargs')
const { id, producer, title } = require('../option-factory/option')
const {
    getAllMovies,
    findMovieById,
    createMovie,
    editMovie,
    removeMovie
} = require('./movies.service')


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
        handler: ({ id }) =>
            console.log(findMovieById(id))

    })
    .command({
        command: 'create',
        describe: 'Create a new movie',
        builder: { producer, title },
        handler: ({ producer, title }) => {                                     // egy arrow function a handler
            console.log(createMovie(producer, title))

        }
    })
    .command({
        command: 'edit',
        describe: 'Edit a movie',
        builder: { id, producer, title },
        handler: ({ id, title, producer }) => {
            console.log(editMovie(id, producer, title))
        }
    })
    .command({
        command: 'remove',
        describe: 'Remove a movie by ID',
        builder: { id },
        handler: ({ id }) => {
            removeMovie(id)
            console.log('deleted')
        }
    })
    .locale('en')                               // ez az alapértelmezett, a helper nyelve
    .strict()
    .help()
    .parse()                                    // process.args helyett, csak args-ként tudunk hivatkozni a parancsokra. 


