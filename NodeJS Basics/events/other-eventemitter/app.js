const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

const scream = () => console.log('I hear a scream')

const tooLateToHelp = () => console.log('Too late, she is dead')

const describeTheMurderer = ({ height, hairColor }) =>
    console.log(`Height: ${height}, Hair color: ${hairColor}`)

eventEmitter.on('scream', scream)
eventEmitter.on('scream', tooLateToHelp)
eventEmitter.once('witness', describeTheMurderer)       //hacsak egyetlen 1-szer szeretném lefuttatni:

eventEmitter.emit('scream')
eventEmitter.emit('scream')         // így kétszer fut le az esemény
eventEmitter.emit('witness', { height: '180cm', hairColor: 'black' })
eventEmitter.emit('witness', { height: '180cm', hairColor: 'black' })
eventEmitter.off('scream', tooLateToHelp)           // leiratkozunk
eventEmitter.emit('scream')

