const http = require('http')
const { readFileSync } = require('fs')
const port = 8080


http.createServer((req, res) => {
    res.writeHead(200, {  //van olyan, hogy statuscode, ezt is meghívhatom, de ez a writehead kaphat paraméterül statuscode-ot!
        'Content-Type': 'text/html'
    })
    const html = readFileSync('./index.html', 'utf-8')
    res.end(html)
}).listen(port)

console.log(`Server is running at http://127.0.0.1:${port}`)
