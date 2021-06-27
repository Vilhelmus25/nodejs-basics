const http = require('http')
const port = 8080

http.createServer((req, res) => {
    res.write('Helloooooo! Holy node!')         // egy stream
    res.end()           // lezárom a választ
}).listen(port)             // megadom a chaint, a portot       kezdje el azt a portot figyelni

console.log(`Server is running at http://127.0.0.1:${port}`)