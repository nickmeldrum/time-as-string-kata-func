'use strict'

const chai = require('chai')
const expect = chai.expect

const formatTime = require('../lib/index.js')

describe('formatTime', function() {
    const testValues = [
        { input: 0, expected: '0 seconds' },
        { input: 1, expected: '1 second' },
        { input: 2, expected: '2 seconds' },
        { input: 60, expected: '1 minute' },
        { input: 61, expected: '1 minute and 1 second' },
        { input: 62, expected: '1 minute and 2 seconds' },
        { input: 120, expected: '2 minutes' },
        { input: 3600, expected: '1 hour' },
        { input: 7200, expected: '2 hours' },
        { input: 7201, expected: '2 hours and 1 second' },
        { input: 7260, expected: '2 hours and 1 minute' },
        { input: 7261, expected: '2 hours, 1 minute and 1 second' },
        { input: 86400, expected: '1 day' },
        { input: 86461, expected: '1 day, 1 minute and 1 second' },
        { input: 90061, expected: '1 day, 1 hour, 1 minute and 1 second' },
        { input: 604800, expected: '1 week' },
        { input: 31536000, expected: '1 year' },
        { input: 31536001, expected: '1 year and 1 second' },
        { input: 31539601, expected: '1 year, 1 hour and 1 second' },
        { input: 32230861, expected: '1 year, 1 week, 1 day, 1 hour, 1 minute and 1 second' },
    ]

    testValues.forEach(testItem => {
        it(`formats ${testItem.input} as ${testItem.expected}`, function() {
            expect(formatTime(testItem.input)).to.equal(testItem.expected)
        })
    })
})
