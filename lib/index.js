function plural(input) {
    return input === 1 ? '' : 's'
}

module.exports = (input) => {
    if (input === 0)
        return '0 seconds'

    const timeIntervals = [
        {name: 'hour', divisor: 3600},
        {name: 'minute', divisor: 60},
        {name: 'second', divisor: 1}
    ]

    let remainingTime = input

    return timeIntervals
        .map(timeInterval => {
            const time = Math.floor(remainingTime / timeInterval.divisor)
            remainingTime = remainingTime % timeInterval.divisor
            return time ? `${time} ${timeInterval.name}${plural(time)}` : ''
        })
        .filter(timeSlice => {
            return timeSlice
        })
        .reduce((prev, current, index, array) => {
            const conjunction = (index === array.length - 1) ? ' and ' : ', '
            const useConjunction = prev
            return prev + (useConjunction ? conjunction : '') + current
        }, '')
}
