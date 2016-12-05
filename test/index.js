
let expect = require('chai').expect
let fileExists = require('./../src/index')

describe('file-exists', function () {
  describe('async', function () {
    it('file exists', function (done) {
      fileExists(__filename, (err, exists) => {
        expect(err).to.be.null
        expect(exists).to.be.true
        done()
      })
    })
    it('file does not exist', function (done) {
      fileExists(__filename + 'foo', (err, exists) => {
        expect(err).to.be.null
        expect(exists).to.be.false
        done()
      })
    })
  })
  describe('sync', function () {
    it('file exists', function () {
      let exists = fileExists.sync(__filename)
      expect(exists).to.be.true
    })
    it('file does not exist', function () {
      let exists = fileExists.sync(__filename + 'foo')
      expect(exists).to.be.false
    })
  })
})
