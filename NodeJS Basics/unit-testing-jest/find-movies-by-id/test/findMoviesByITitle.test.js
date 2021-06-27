/* eslint-disable func-call-spacing */
const findMoviesByTitle = require('../src/findMoviesByTitle')

test('findMoviesByTitle should be an array of movies objects', () => {
    // expect(findMoviesByTitle('F')).toEqual([
    //     { title: 'Flipper', emoji: 'dolphin' }      // ha van egy Flipper 2 a tömbben, akkor nem lesz jó, mert megadtam, hogy csak egyetlen ilyen objectet tartalmazzon a teszt szerint
    //     // ez azért nem jó, mert ha módosul a tömb, akkor a tesztet is módosítani kéne, ez rengeteg plusz munka lenne
    //     // erre jó a Snapshot teszt
    // ])

    expect.addSnapshotSerializer({
        test: ({ title, emoji }) => title && emoji,
        print: ({ title, emoji }) => `${emoji} ${title}`
    })
    expect(findMoviesByTitle('F')).toMatchSnapshot()        // így létrehoz egy __snapshot mappát
    // ha kitörlünk egy objektumot, akkor sír, mert nem egyezik a snapshot a valósággal
    // erre kell a jest --updateSnapshot parancs és frissíti a snapshotot és utána már jó lesz, egy pillanatkép = snapshot készül
})