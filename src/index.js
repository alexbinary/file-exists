
let fs = require('fs')

function fileExists (filepath, cb) {
  return fs.access(filepath, (err) => {
    cb(null, !Boolean(err))
  })
}

fileExists.sync = function (filepath) {
  return fs.existsSync(filepath)
}

module.exports = fileExists
