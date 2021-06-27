const getData = callback => {
    setTimeout(() => {
        const data = 'data'
        callback(data)
    }, 1000)                    // fontos, látszóla jól lefut a teszt, de a setTimeout-nál nem fog várni, és a callback sem fut le, csalóka. Erre kell a done() a másik fájlban
}

module.exports = getData
