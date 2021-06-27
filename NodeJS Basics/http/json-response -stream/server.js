const http = require('http')
const { createReadStream } = require('fs')
// ez a streames megoldás, ez több adatforgalmat produkál és lassabb is ezáltal, mert ez a sortöréseket is benne hagyja, ha nem volt minify-olva

const port = 8081

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    createReadStream('./database/movies.json').pipe(res)
}).listen(port)

console.log(`Server running at http://127.0.0.1:${port}`)
