const utils = require("./utils")
//const { even } = require("./utils")     // csúnya az egész utilst átadni, elég csak az objektum propertyjét, mint itt

const priceList = [1231, 53456, 71245, 23451, 210, 13245,]
//console.log(even(priceList))            // memóriát spórolunk
//console.log(utils)

console.log(utils.multipliedByRandom(priceList, 6));