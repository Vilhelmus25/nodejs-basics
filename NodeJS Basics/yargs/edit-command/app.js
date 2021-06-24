const yargs = require('yargs')
const movies = require('./database/movies')

yargs
    .version('1.0.0')
    .usage('Usage: <command> [options]')        // ide fogja a parancs helyét behelyettesíteni 
    // .command('get', 'Get all movies', () => console.log(movies))
    .command({
        command: 'get',
        describe: 'Get all movies',
        handler: () => console.log(movies)
    })
    .command({
        command: 'find',
        describe: 'Find a movie by id',
        builder: {
            id: {
                alias: 'i',
                describe: 'Movie ID',
                type: 'number',
                demandOption: true
            }
        },
        handler: ({ id }) =>
            console.log(movies.find(movie => movie.id === id))

    })
    .command({
        command: 'create',
        describe: 'Create a new movie',
        builder: {
            producer: {
                alias: 'p',
                describe: 'Film producer',
                type: 'string',
                demandOption: true
            },
            title: {
                alias: 't',
                describe: 'Movie title',
                type: 'string',
                demandOption: true
            }
        },
        handler: ({ title, producer }) => {                                     // egy arrow function a handler
            const sortedMovies = [...movies].sort((a, b) => a.id > b.id)        // sorbarendezés id alapján, majd hozzácsapjuk
            const id = sortedMovies[sortedMovies.length - 1].id + 1             // az id-t növeljük eggyel
            const movie = { id, title, producer }                               // az új movie object
            movies = [...movies, movie]                                         // spread operator, a teljes objectet lecseréli erre az újra, olyan mint egy push
            console.log(movies.find(movie => movie.id === id))                  // az új moviet fogja kiírni
        }
    })
    .command({
        command: 'edit',
        describe: 'Edit a movie',
        builder: {
            id: {
                alias: 'i',
                describe: 'Movie ID',
                type: 'number',
                demandOption: true
            },
            producer: {
                alias: 'p',
                describe: 'Film producer',
                type: 'string',
                demandOption: true                                  // ez és a többi demandos megadása kötelező
            },
            title: {
                alias: 't',
                describe: 'Movie title',
                type: 'string',
                demandOption: true
            }
        },
        handler: ({ id, title, producer }) => {
            movies = movies.map(movie => movie.id === id ? { id, producer, title } : movie)     // ha stimmel a movie id-ja a paraméterül kapottéval, akkor módosítani kell ezt a moviet, különben, dobjuk vissza az eredeti movie-t, mert nem kellett módosítani
            console.log(movies.find(movie => movie.id === id))
        }
    })
    .locale('en')                               // ez az alapértelmezett, a helper nyelve
    .strict()
    .help()
    .parse()                                    // process.args helyett, csak args-ként tudunk hivatkozni a parancsokra. 


