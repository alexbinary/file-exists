
let expect = require('chai').expect
let fileexists = require('./../src/index')

describe('file-exists', function () {
  describe('promise', function () {
    it('exists', function (done) {
      // ## TEST
      fileexists(__filename).then((exists) => {
        // ## Assert
        expect(exists).to.be.true
        // ## End
      }).then(() => done()).catch(done)
    })
    it('not exist', function (done) {
      // ## TEST
      fileexists(__filename + 'foo').then((exists) => {
        // ## Assert
        expect(exists).to.be.false
        // ## End
      }).then(() => done()).catch(done)
    })
  })
  describe('callback', function () {
    it('exists', function (done) {
      // ## TEST
      fileexists(__filename, (err, exists) => {
        // ## Assert
        expect(err).to.be.null
        expect(exists).to.be.true
        // ## End
        done()
      })
    })
    it('not exist', function (done) {
      // ## TEST
      fileexists(__filename + 'foo', (err, exists) => {
        // ## Assert
        expect(err).to.be.null
        expect(exists).to.be.false
        // ## End
        done()
      })
    })
  })
  describe('sync', function () {
    it('exists', function () {
      // ## TEST
      let exists = fileexists.sync(__filename)
      // ## Assert
      expect(exists).to.be.true
      // ## End
    })
    it('not exist', function () {
      // ## TEST
      let exists = fileexists.sync(__filename + 'foo')
      // ## Assert
      expect(exists).to.be.false
      // ## End
    })
  })
})
