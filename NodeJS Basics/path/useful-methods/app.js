const path = require('path')

const filePath = '/This/Is/A/File/Path/file.js'

console.log(`Dirname: ${path.dirname(filePath)}`)
console.log(`Last part: ${path.basename(filePath)}`)
console.log(`Extension: ${path.extname(filePath)}`)
console.log(`filename: ${path.basename(filePath, path.extname(filePath))}`)         // így nem teszi ki a kiterjesztést
console.log(`Is an absolute path: ${path.isAbsolute(filePath)}`)
console.log(path.parse(filePath))       // felbontja a paraméterként kapott útvonalat és egy objectet fog visszaadni belőle

const filePathObject = {
    dir: 'C:\\Users\\User',         // 'C:/Users/User      így is lehet, csak akkor a / jelek összekuszálódnak
    base: 'file.js'
}

console.log(path.format(filePathObject))        // a fentiből egy stringet fog csinálni