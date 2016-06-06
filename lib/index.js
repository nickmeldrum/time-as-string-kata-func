'use strict'

function plural(input) {
    return input === 1 ? '' : 's'
}

function returnNonEmpty(input) {
    return input.filter(timeSlice => timeSlice)
}

function timeIntervals() {
    return [
        {name: 'hour', divisor: 3600},
        {name: 'minute', divisor: 60},
        {name: 'second', divisor: 1}
    ]
}

function secondsToIntervals(input) {
    let remainingTime = input

    return timeIntervals()
        .map(timeInterval => {
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
    return combineIntervals(returnNonEmpty(secondsToIntervals(input)))
}
