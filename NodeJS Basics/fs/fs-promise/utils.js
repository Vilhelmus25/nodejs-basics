// File beolvasása aszinkron módon promise-ok segítségével.

const { readFile } = require('fs').promises      // !!! ezen keresztül érhetjük el azokat az fs-en belüli metódusokat, amiknek van promise-a, nem mindennek van

const ReadFileWrapper = async (file, options) => {
    // try {
    const result = await readFile(file, options)
    console.log(result);
    // }
    // catch (err) {            // nem muszáj, mert nem végzünk valódi hibakezelést
    //     console.log(err);
    // }
}

module.exports = ReadFileWrapper
