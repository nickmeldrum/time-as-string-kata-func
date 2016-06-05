module.exports = (input) => {
    if (input === 0)
        return '0 seconds'

    const minutes = Math.floor(input / 60)
    const seconds = input % 60
    const secondsPlural = seconds === 1 ? '' : 's'
    const minutesPlural = minutes === 1 ? '' : 's'

    let timeString = ''

    if (minutes > 0)
        timeString += `${minutes} minute${minutesPlural}`
    if (seconds > 0)
        timeString += `${seconds} second${secondsPlural}`

    return timeString
}
