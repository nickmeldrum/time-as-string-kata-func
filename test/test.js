const chai = require('chai')
const expect = chai.expect

const formatTime = require('../lib/index.js')

describe('formatTime', function() {
    it('formats 0 as 0 seconds', function() {
        expect(formatTime(0)).to.equal('0 seconds')
    })

    it('formats 1 as 1 second', function() {
        expect(formatTime(1)).to.equal('1 second')
    })
})
