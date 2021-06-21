
const even = arr => arr.filter(item => item % 2 === 0)
const odd = arr => arr.filter(item => item % 2 !== 0)

module.exports = Object.freeze({        // módosíthatatlanná teszi az objektumonkat, de nem teljes mértékben
    // megakadályozza, hogy az object propertijeit felülírhassuk
    even,
    odd,
    users: {                            // a felsőbb szintű propertyket lefagyassza, de pl, ezt az objektumot már nem fagyassza, legalábbis a propertyjeit
        name: 'John Doe',
        age: 30
    }
})

//nem deep freez-t csinál, hasznos, adat levédésre, nehogy felülírjuk őket.