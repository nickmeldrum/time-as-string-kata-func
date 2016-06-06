'use strict'

function compose(a, b, c) {
    return function(input) {
        return c(b(a(input)))
    }
}

function plural(input) {
    return input === 1 ? '' : 's'
}

function returnNonEmpty(input) {
    return input.filter(timeSlice => timeSlice)
}

function secondsToIntervals(input) {
    const timeIntervals = [
        {name: 'hour', divisor: 3600},
        {name: 'minute', divisor: 60},
        {name: 'second', divisor: 1}
    ]

    let remainingTime = input

    return timeIntervals.map(timeInterval => {
        const time = Math.floor(remainingTime / timeInterval.divisor)
        remainingTime = remainingTime % timeInterval.divisor
        return time ? `${time} ${timeInterval.name}${plural(time)}` : ''
    })
}

function combineIntervals(input) {
    return input.reduce((prev, current, index, array) => {
        const conjunction = (index === array.length - 1) ? ' and ' : ', '
        const useConjunction = prev
        return prev + (useConjunction ? conjunction : '') + current
    }, '')
}

module.exports = (input) => {
    if (input === 0) return '0 seconds'
    const formatDuration = compose(secondsToIntervals, returnNonEmpty, combineIntervals)
    return formatDuration(input)
}
