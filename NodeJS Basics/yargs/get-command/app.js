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
    .locale('en')                               // ez az alapértelmezett, a helper nyelve
    .strict()
    .help()
    .parse()                                    // process.args helyett, csak args-ként tudunk hivatkozni a parancsokra. 


