const { readFileSync, writeFileSync } = require('fs')

const MoviesApi = (path, prop) => ({        // egy objectet adunk vissza, ezért kell a () és azon belül vanaz object {}

    get() {
        const dataString = readFileSync(path)
        return JSON.parse(dataString)[prop]               // nem kell az egész fájl parse-olni, hanem elég csak egy adott propertyjű részt kell, amit paraméterül kap
    },

    save(data) {
        writeFileSync(path, JSON.stringify({ [prop]: data }))               // melyik fájlt, valamint paraméterül egy tömböt fogok kapni, ami objecteket tartalmaz, ezeket stringesíteni kell egy JSON fájlba; a [prop] helyére kerül mondjuk egy movies és a data pedig egy tömb, ami az összes objectet tartalmazza

    }

})
module.exports = Object.freeze({
    MoviesApi                                       // ha egy van akkor nem kell a freeze
})