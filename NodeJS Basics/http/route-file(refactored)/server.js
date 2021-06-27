const http = require('http')
const router = require('./router/router')

const port = 8080

http.createServer(({ url }, res) => {       // a { url } a req helyett van
    router[url] ? router[url](res) : router['/404'](res)        // és akkor a req.url helyett url-t lehet írni
}).listen(port)

console.log(`Server is running at http://127.0.0.1:${port}`)

// http://127.0.0.1 - index.html
// http://127.0.0.1/about - about.html
// http://127.0.0.1/contact - contact.html
