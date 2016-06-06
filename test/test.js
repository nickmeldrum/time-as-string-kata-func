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
        { input: 7261, expected: '2 hours, 1 minute and 1 second' }
    ]

    testValues.forEach(testItem => {
        it(`formats ${testItem.input} as ${testItem.expected}`, function() {
            expect(formatTime(testItem.input)).to.equal(testItem.expected)
        })
    })
})
