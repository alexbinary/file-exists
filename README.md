# file-exists
Simple and consistent way to check if a file exists 🔎

## Install

Install with npm/yarn :

```
$ npm install https://github.com/alexbinary/file-exists.git

$ yarn add https://github.com/alexbinary/file-exists.git
```

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
