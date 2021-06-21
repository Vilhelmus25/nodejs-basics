const increaseDate = (date, day = 3) => {
    return new Date(date) + new Date(Date.UTC(0, 0, day, 0, 0, 0))
}

const increaseAndFormatDate = (date) => {
    date.map(item => item[new Date(Date.UTC(date)).toLocaleDateString()])
}

module.exports = increaseAndFormatDate