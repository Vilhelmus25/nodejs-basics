const fs = require('fs')

const trucanceAndPrintFile = (file, length, bufferSize) => {
    fs.open(file, 'r+', (err, fd) => {      // fd = fileDescriptor
        if (err) throw err
        fs.ftruncate(fd, length, (err) => {
            if (err) throw err
            const buffer = Buffer.alloc(bufferSize)
            fs.read(fd, buffer, 0, buffer.length, 0, (err, bytes) => {// mettől meddig és position a vége
                if (err) throw err
                if (bytes > 0) console.log(buffer.slice(0, bytes).toString())
                fs.close(fd, (err) => {
                    if (err) throw err
                })
            })
        })
    })
}

module.exports = trucanceAndPrintFile