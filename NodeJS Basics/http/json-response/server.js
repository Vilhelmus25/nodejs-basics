const http = require('http')
const movies = require('./database/movies')         // a require itt egy szinkron művelet beolvasás, és cache-eli a a tartalmat.
// baj lehet, ha közben változik a db

const port = 8080

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(movies))
}).listen(port)

console.log(`Server running at http://127.0.0.1:${port}`)
