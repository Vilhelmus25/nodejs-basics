const { writeFileWrapper, appendFileWrapper } = require('./utils')

writeFileWrapper('./szamarmese.txt', 'SZAMÁRMESE')      // ha nem létezik a fájl akkor létrehoz egyet, ha létezik, akkor megváltoztatja.
appendFileWrapper('./poets.txt', 'Romhányi a Rímhányó')