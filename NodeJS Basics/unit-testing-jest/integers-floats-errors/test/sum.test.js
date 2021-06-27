/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable no-multi-spaces */
const sum = require('../src/sum')

test('sum 1 + 2 should be 3', () => {
    const actual = sum(1, 2)
    const expected = 3
    expect(actual).toBe(expected)                        // jestjs.io oldalnál a keresőben expect kulcsszóra keresve ott van az összes lehetséges fv.

})                                                       // a linter hibát dobott a test-re és az expect-re.
// npm i eslint-plugin-jest -D
// majd a eslint.json-ben beírni:              "jest/globals": true        "plugins": ["jest"],
// majd a package.json-ben a scripts/test/"jest" legyen csak
// npm run test


test('sum 0.1 + 0.2 should be close to 0.3', () => {
    const actual = sum(0.1, 0.2)
    const expected = 0.3
    expect(actual).toBeCloseTo(expected)                        // lebegőpontos számoknál toBeCloseTo

})

test('sum gives an Error if one or more parameters are not finite numbers', () => {
    // expect(sum(1, 'a')).toThrow()         // így is lehet az expectet használni és arra vagyok kíváncsi ,hogy hibát dob-e erre.  
    // már a teszt lefutása előtt hibára fut és ez baj, ezt megelőzve
    const wrongParameters = [null, NaN, '', Infinity, undefined]
    wrongParameters.forEach(parameter => {

        expect(() => sum(1, parameter)).toThrow()        // tegyük egy callback-be és jó lesz
    })

})
