const findUserById = require('../src/findUserById')

test('findUserById should return a user object', () => {
    const users = [{ id: 1 }]       // stub, olyan adatok, amiket valójában sehol nem használunk fel, csak a tesztnél
    const id = 1
    expect(findUserById(users, id)).toEqual(users[0])       // nem egy db-ből olvasom, ez nem lényeg, egy alap mock-al tesztelem, az érdekel, hogy működik-e.
})