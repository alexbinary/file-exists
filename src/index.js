
let fs = require('fs')
let promisify = require('alexbinary.promisify')

let fileExists = promisify(null, function (filepath, cb) {
  fs.access(filepath, (err) => {
    cb(null, !err)
  })
})

fileExists.sync = function (filepath) {
  return fs.existsSync(filepath)
}

module.exports = fileExists
