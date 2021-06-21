
const fileHandlerCallback = (err) => {
    if (err) throw err
    console.log('file process successful')
}

const fileHandlerWrapper = ({ method, path, data, callback = fileHandlerCallback } = {}) => {
    method(path, data, callback)
}

module.exports = {
    fileHandlerWrapper
}
