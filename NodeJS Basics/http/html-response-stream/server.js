const http = require('http')
const { /*readFileSync*/ createReadStream } = require('fs')     // az helyett ez
const port = 8080


http.createServer((req, res) => {
    res.writeHead(200, {  //van olyan, hogy statuscode, ezt is meghívhatom, de ez a writehead kaphat paraméterül statuscode-ot!
        'Content-Type': 'text/html'
    })
    createReadStream('./index.html').pipe(res)          // nem szinkron beolvasom, helyette egy streamet készítek beolvasom a fájlt és összepipe-oltam a response-al
}).listen(port)

console.log(`Server is running at http://127.0.0.1:${port}`)
