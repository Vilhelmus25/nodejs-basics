const convertToUpperCase = require('../src/convertToUpperCase')

describe('convertToUpperCase ', () => {
    test('"test" should be "TEST"', () => {
        return convertToUpperCase('test')       // a return meg fogja várni a promise-t hogy lefusson a then miatt
            .then(str => {                      // return nélkül is passed, de csalóka, mert nem várta meg a promiset
                expect(str).toBe('TEST')
            })
    })
    test('give a TypeError if parameter is not a string', () => {
        return convertToUpperCase('10')
            .catch(err => {
                expect(err).toEqual(TypeError)
            })
    })
    // then: a jót keresem vagy catch, akkor a hibát

    test('"test" should be "TEST"', async () => {
        await expect(convertToUpperCase('test')).resolves.toBe('TEST')      // az await a resolves ágat adja és ott nézem, hogy sikeres-e
    })

    test('give a TypeError if parameter is not a string', async () => {
        await expect(convertToUpperCase(10)).rejects.toEqual(TypeError)      // az await a resolves ágat adja és ott nézem, hogy sikeres-e
    })
    // ha azt nézem, hogy jó-e, akkor resolves és toBe()  ; ha azt, hogy van-e hiba, akkor rejects és toEqual()
})
