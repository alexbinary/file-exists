
let expect = require('chai').expect
let fileExists = require('./../src/index')

describe('file-exists', function () {
  describe('callback', function () {
    it('exists', function (done) {
      // ## TEST
      fileExists(__filename, (err, exists) => {
        // ## Assert
        expect(err).to.be.null
        expect(exists).to.be.true
        // ## End
        done()
      })
    })
    it('not exist', function (done) {
      // ## TEST
      fileExists(__filename + 'foo', (err, exists) => {
        // ## Assert
        expect(err).to.be.null
        expect(exists).to.be.false
        // ## End
        done()
      })
    })
  })
  describe('promise', function () {
    it('exists', function (done) {
      // ## TEST
      fileExists(__filename).then((exists) => {
        // ## Assert
        expect(exists).to.be.true
        // ## End
      }).then(done, done)
    })
    it('not exist', function (done) {
      // ## TEST
      fileExists(__filename + 'foo').then((exists) => {
        // ## Assert
        expect(exists).to.be.false
        // ## End
      }).then(done, done)
    })
  })
  describe('sync', function () {
    it('exists', function () {
      // ## TEST
      let exists = fileExists.sync(__filename)
      // ## Assert
      expect(exists).to.be.true
      // ## End
    })
    it('not exist', function () {
      // ## TEST
      let exists = fileExists.sync(__filename + 'foo')
      // ## Assert
      expect(exists).to.be.false
      // ## End
    })
  })
})
