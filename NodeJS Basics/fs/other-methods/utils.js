const { unlink, rename, copyFile, stat, chmod } = require('fs')

const fileHandlerCallback = (err) => {
    if (err) throw err
    console.log('file process successful')
}

const unlinkWrapper = ({ path, callback = fileHandlerCallback } = {}) => {
    unlink(path, callback)
}

const renameWrapper = ({ oldPath, newPath, callback = fileHandlerCallback } = {}) => {
    rename(oldPath, newPath, callback)
}

const copyFileWrapper = ({ src, dest, callback = fileHandlerCallback } = {}) => {
    copyFile(src, dest, callback)
}

const statWrapper = ({ path, callback = fileHandlerCallback } = {}) => {
    stat(path, callback)
}

// a tulajdonos, a csoport többi tagjának, egyéb userek jogosultságát fogja beállítani
// READ: 4, WRITE: 2, EXECUTE: 1
// 777  (4+2+1 = 7) full access, mind a tulajdonosnak, csoport többi tagjának és mindenki másnak
// 755  stb. általában ezt használjuk
const chmodWrapper = ({ path, mode, callback = fileHandlerCallback } = {}) => {
    chmod(path, mode, callback)
}

module.exports = {
    unlinkWrapper,
    renameWrapper,
    copyFileWrapper,
    statWrapper,
    chmodWrapper,
}

