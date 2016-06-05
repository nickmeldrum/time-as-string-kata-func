function plural(input) {
    return input === 1 ? '' : 's'
}

module.exports = (input) => {
    if (input === 0)
        return '0 seconds'

    const timeSlices = [
        {name: 'hour', divisor: 3600},
        {name: 'minute', divisor: 60},
        {name: 'second', divisor: 1}
    ]

    let timeString = ''
    let remainingTime = input

    timeSlices.forEach(timeSlice => {
        const time = Math.floor(remainingTime / timeSlice.divisor)
        if (time > 0) {
            const conjunction = timeString ? ' and ' : ''
            timeString += `${conjunction}${time} ${timeSlice.name}${plural(time)}`
        }
        remainingTime = remainingTime % timeSlice.divisor
    })

    return timeString
}
