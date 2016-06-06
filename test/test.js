const chai = require('chai')
const expect = chai.expect

const formatTime = require('../lib/index.js')

describe('formatTime', function() {
    test(0, '0 seconds')
    test(1, '1 second')
    test(2, '2 seconds')
    test(60, '1 minute')
    test(61, '1 minute and 1 second')
    test(62, '1 minute and 2 seconds')
    test(120, '2 minutes')
    test(3600, '1 hour')
    test(7200, '2 hours')
    test(7201, '2 hours and 1 second')
    test(7260, '2 hours and 1 minute')
    test(7261, '2 hours, 1 minute and 1 second')

    function test(input, expectedOutput) {
        it(`formats ${input} as ${expectedOutput}`, function() {
            expect(formatTime(input)).to.equal(expectedOutput)
        })
    }
})
