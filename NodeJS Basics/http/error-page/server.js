const http = require('http')
const { createReadStream } = require('fs')

const port = 8080

http.createServer((req, res) => {
    //console.log(req.url)                // ez kiírja, hogy milyen url-t
    if (req.url === '/') {              // a gyökér
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        createReadStream('./views/index.html').pipe(res)
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        createReadStream('./views/about.html').pipe(res)
    } else if (req.url === '/contact') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        createReadStream('./views/contact.html').pipe(res)
    } else {
        res.writeHead(404, {                                    // annyi a különbség a sima routinghoz képest, hogy itt writeHead van és Stream a statuscode és az end() helyett
            'Content-Type': 'text/html'
        })
        createReadStream('./views/404.html').pipe(res)
    }
}).listen(port)

console.log(`Server is running at http://127.0.0.1:${port}`)

// http://127.0.0.1 - index.html
// http://127.0.0.1/about - about.html
// http://127.0.0.1/contact - contact.html
