'use strict'

const timeIntervals = [
    {name: 'year', divisor: 31536000},
    {name: 'week', divisor: 604800},
    {name: 'day', divisor: 86400},
    {name: 'hour', divisor: 3600},
    {name: 'minute', divisor: 60},
    {name: 'second', divisor: 1}
]

function secondsToIntervals(input) {
    return timeIntervals.map(function (timeInterval) {
        const number = numberOfUnits(this.remaining, timeInterval.divisor)
        this.remaining = remainder(this.remaining, timeInterval.divisor)
        return formatInterval(number, timeInterval.name)
    }, {remaining: input})
}

function returnNonEmpty(input) {
    return input.filter(timeSlice => timeSlice)
}

function combineIntervals(input) {
    return input.reduce((prev, current, index, array) =>
        prev + (prev ? conjunction(index, array.length) : '') + current, '')
}

function remainder(seconds, divisor) {
    return seconds % divisor
}

function numberOfUnits(seconds, divisor) {
    return Math.floor(seconds / divisor)
}

function formatInterval(number, unit) {
    return number ? `${number} ${unit}${plural(number)}` : ''
}

function plural(input) {
    return input === 1 ? '' : 's'
}

function conjunction(position, total) {
    return (position === total - 1) ? ' and ' : ', '
}

function compose(a, b, c) {
    return function(input) {
        return c(b(a(input)))
    }
}

module.exports = (input) => {
    if (input === 0) return '0 seconds'
    const formatDuration = compose(secondsToIntervals, returnNonEmpty, combineIntervals)
    return formatDuration(input)
}
