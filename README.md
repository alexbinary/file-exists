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
let fileexists = require('alexbinary.file-exists')

// callback
fileexists('/path/to/file', (err, exists) => {
  console.log('file exists: ' + (exists ? 'yes' : 'no'))
})

// promise
fileexists('/path/to/file').then((exists) => {
  console.log('file exists: ' + (exists ? 'yes' : 'no'))
})

// sync
let exists = fileexists.sync('/path/to/file')
console.log('file exists: ' + (exists ? 'yes' : 'no'))
```

## License

MIT
