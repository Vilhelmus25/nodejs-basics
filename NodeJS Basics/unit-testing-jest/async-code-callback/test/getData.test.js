/* eslint-disable no-multi-spaces */
const getData = require('../src/getData')

test('getData should be "DATA', (done) => {
    const callback = (str) => {
        expect(str).toBe('data')        // fontos a callback-en belül van az expect
        done()              // így megvárja az aszinkron műveleteket
    }
    getData(callback)
})
