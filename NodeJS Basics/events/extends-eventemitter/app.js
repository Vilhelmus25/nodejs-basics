const Calculator = require('./Calculator')
const calculator = new Calculator()

calculator.on('start', () =>
    console.log('start callback called'))

calculator.on('end', (sum) =>
    console.log('End callbback called. Sum:', sum))

calculator.sum(10, 20)