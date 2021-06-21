// const fs = require('fs')

// const data = fs.readFileSync('./fs/read-file-methods/szamarmese.txt', { encoding: 'utf-8' })       // vagy így adom meg, vagy a terminálon belépek abba a mappába, amiben az app.js található.
// // ha a fv-ben optionsként megadom az enkódolást, akkor a nem a buffert adja vissza, hanem magát a tartalmat.
// //console.log(data)

// // aszinkron beolvasás:
// fs.readFile('./szamarmese.txt', { encoding: 'utf-8' },
//     (err, data) => {
//         if (err) throw err
//         console.log(data)      // egyéb eset
//     }
// )


const { readFileSyncLog, readFileLog } = require('./utils')

readFileSyncLog('./szamarmese.txt', { encoding: 'utf-8' })
readFileLog('./szamarmese.txt', { encoding: 'utf-8' })
