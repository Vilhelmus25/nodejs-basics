const { writeFile, appendFile } = require('fs')
const { fileHandlerWrapper } = require('./utils')

fileHandlerWrapper({
    method: writeFile, path: './szamarmese.txt', data: 'SZAMÁRMESE1'
})      // ha nem létezik a fájl akkor létrehoz egyet, ha létezik, akkor megváltoztatja.
fileHandlerWrapper({
    method: appendFile, path: './poets.txt', data: 'Romhányi a Rímhányó1'
})