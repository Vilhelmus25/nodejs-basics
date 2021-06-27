const http = require('http')
const SiteRouter = require('./router/site.router')

//const port = 8080       // mi van ha nem fixen beégetve akarjuk a port-ot, hanem környezeti változóból
const port = process.env.PORT || 8080       // abban az esetben, ha van olyan környezeti változónk, aminek van portszáma, akkor használja azt, ha nincs akkor a 8080 -at
// terminals: set PORT=8081


http.createServer(({ url }, res) => {       // a { url } a req helyett van
    SiteRouter[url] ? SiteRouter[url](res) : SiteRouter['/404'](res)        // és akkor a req.url helyett url-t lehet írni
})
    .on('error', err => console.log(`Server error: ${err.message}`))
    .on('listening', () => console.log(`Server is running at http://127.0.0.1:${port}`))        // így elegánsabb ha netán hiba van
    .listen(port)



// http://127.0.0.1 - index.html
// http://127.0.0.1/about - about.html
// http://127.0.0.1/contact - contact.html
