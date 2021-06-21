const Promise = require('bluebird')     // importáljuk a bluebirdöt
const fs = Promise.promisifyAll(require('fs'))      // a teljes fs modul minden modulja át lesz alakítva a callback verzióból promisosra.


const trucanceAndPrintFile = async (file, length, bufferSize) => {
    // bluebird telepítése: npm i bluebird
    const fd = await fs.openAsync(file, 'r+')
    await fs.ftruncateAsync(fd, length)
    const buffer = Buffer.alloc(bufferSize)
    const bytes = await fs.readSync(fd, buffer, 0, buffer.length, 0)
    if (bytes > 0) console.log(buffer.slice(0, bytes).toString())
    await fs.closeAsync(fd)
}

module.exports = trucanceAndPrintFile