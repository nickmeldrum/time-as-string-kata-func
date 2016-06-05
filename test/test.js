const chai = require('chai')
const expect = chai.expect

const app = require('../lib/index.js')

describe('app', function() {
    it('app returns true', function() {
        expect(app()).to.be.true
    })
})
