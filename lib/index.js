module.exports = (seconds) => {
    const plural = seconds === 1 ? '' : 's'

    return `${seconds} second${plural}`
}
