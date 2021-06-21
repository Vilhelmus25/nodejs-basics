const EventEmitter = require('./EventEmitter')


const eventEmitter = new EventEmitter()
eventEmitter.on('speak', () => console.log('Zombie says "Grrrr"'))
eventEmitter.on('speak', () => console.log('Hungry zombie says "Harr harr"'))       // az emittereke aszinkronok, de a fv-ek szinkron fognak lefutni egymás után
eventEmitter.on('walk', () => console.log('Deads are walking'))

eventEmitter.emit('speak')
eventEmitter.emit('walk')
eventEmitter.emit('eat')        // ez tárgytalan