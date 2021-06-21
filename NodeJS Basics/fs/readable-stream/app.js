
const { createReadStream } = require('fs')

const readableStream = createReadStream('./szamarmese.txt', {       //azért jó, mert nem kell az egész fájlt beolvasni (nagy méret esetén gáz), hanem bufferozik
    encoding: 'utf-8',
    highWaterMark: 11
})

readableStream.on('data', (chuck) => {   // ha valamilyen adatrészt, töredéket olvasunk ki a fájlból, akkor írjuk ki
    // console.log(chuck)
    process.stdout.write(chuck)     // ez hasonló, mint a console log, csak sortörések nélkül szeretnék írni a standard kimenetre
    // így az eredeti rendezést kapjuk. Addig írja ki ezeket a buffer szeleteket, amíg a fájlnak nincs vége.
})


