# file-exists
Simple and consistent way to check if a file exists 🔎

## Install

This package is not hosted on the NPM registry.
You must install directly from GitHub using the npm or yarn client :

```bash
$ npm install alexbinary/file-exists
# or
$ yarn add alexbinary/file-exists
```

This will install the latest version from the `master` branch, which sould always be the latest stable version.

## Usage

```javascript
let fileExists = require('alexbinary.file-exists')

// callback
fileExists('/path/to/file', (err, exists) => {
  console.log('file exists: ' + (exists ? 'yes' : 'no'))
})

// promise
fileExists('/path/to/file').then((exists) => {
  console.log('file exists: ' + (exists ? 'yes' : 'no'))
})

// sync
let exists = fileExists.sync('/path/to/file')
console.log('file exists: ' + (exists ? 'yes' : 'no'))
```

## License

MIT
