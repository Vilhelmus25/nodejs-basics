const http = require('http')
const { /*readFileSync*/ createReadStream } = require('fs')     // az helyett ez
const port = 8080


http.createServer((req, res) => {
    res.writeHead(200, {  //van olyan, hogy statuscode, ezt is meghívhatom, de ez a writehead kaphat paraméterül statuscode-ot!
        'Content-Type': 'text/html'
    })
    const name = 'John'
    const readableStream = createReadStream('./index.html')
    readableStream.on('data', chuck => {
        const htmlFragment = chuck.toString().replace(/\{\{name\}\}/g, name)    // kicserélem a a name-t a chuckban
        res.write(htmlFragment)                 // beírom válaszként
    })
    readableStream.on('end', () => res.end())       // feliratkozunk az end eseményre onnal, majd meghívjuk az end függvényt, amivel lezárjuk
}).listen(port)

console.log(`Server is running at http://127.0.0.1:${port}`)
