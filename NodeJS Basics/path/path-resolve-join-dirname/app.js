const { resolve, join } = require('path')


console.log(resolve())
console.log(join())     // az aktuális munkakönyvtárunk útvonalát, a relatív útvonalát

console.log(__dirname)

console.log(resolve('./szamarmese.txt'))
console.log(join(__dirname, './szamarmese.txt'))        // ez a tökéletes útvonal amit kapok!