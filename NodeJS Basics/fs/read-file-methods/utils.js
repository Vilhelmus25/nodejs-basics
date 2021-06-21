const fs = require('fs')

const readFileSyncLog = (path, options = {}) => {
    // vagy így adom meg, vagy a terminálon belépek abba a mappába, amiben az app.js található.
    console.log(fs.readFileSync(path, options))
}

// ha a fv-ben optionsként megadom az enkódolást, akkor a nem a buffert adja vissza, hanem magát a tartalmat.

// aszinkron beolvasás:
const readFileLog = (path, options = {}) => {

    fs.readFile(path, options,
        (err, data) => {
            if (err) throw err
            console.log(data)      // egyéb eset
        }
    )
}

module.exports = Object.freeze({
    readFileSyncLog,
    readFileLog
})