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

fileExists('/path/to/file', (err, exists) => {
  console.log('file exists: ' + (exists ? 'yes' : 'no'))
})

// sync version
let exists = fileExists.sync('/path/to/file')
console.log('file exists: ' + (exists ? 'yes' : 'no'))
```

## License

MIT
