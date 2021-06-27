/* eslint-disable no-multi-spaces */
/* eslint-disable indent */
const generateItems = require('../src/generateItems')

// test('generateItems call callback count of items times', () => {
//     const mockCallback = jest.fn(x => x * 2) // mock function: nem feltétlen vagyok kíváncsi a belső implementációjára
//     const arr = [1, 2]
//     const actual = generateItems(arr, mockCallback)
//     const expected = [2, 4]
//     expect(actual).toEqual(expected)
//     // expect(mockCallback).toHaveBeenCalled()         // hogy meghívódott-e egyáltalán a fv.
//     expect(mockCallback).toHaveBeenCalledTimes(1)         // toHaveBeenCalledTimes(2)  hogy hányszor hívódott meg, 2-nél jó lesz, 1-nél már nem

// })

test('generateItems call callback count of items times', () => {
    const mockCallback = jest.fn(x => x * 2) // mock function: nem feltétlen vagyok kíváncsi a belső implementációjára, sőt, mindegy is mi van bele írva, üres is lehetne, nem az érdekel mit csinál, hanem, hogy hányszor hívódik meg jelenleg
    const arr = [1, 2]
    generateItems(arr, mockCallback)
    expect(mockCallback).toHaveBeenCalledTimes(2)         // toHaveBeenCalledTimes(2)  hogy hányszor hívódott meg, 2-nél jó lesz, 1-nél már nem
    // expect(mockCallback.mock.results[0].value).toBe(2)      // így tudjuk vizsgálni, hogy a callback minden egyes meghívásnál milyen visszatérési értéket ad
    // expect(mockCallback.mock.results[1].value).toBe(4)      // így tudjuk vizsgálni, hogy a callback minden egyes meghívásnál milyen visszatérési értéket ad
    //                      results[0] első alkalom, results[1] második
})
