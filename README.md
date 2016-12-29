# file-exists

Simple and consistent way to check if a file exists 🔎

[![npm](https://img.shields.io/npm/v/@alexbinary/file-exists.svg)](https://www.npmjs.com/package/@alexbinary/file-exists)
[![GitHub release](https://img.shields.io/github/release/alexbinary/file-exists.svg?label="github")](https://github.com/alexbinary/file-exists/releases/latest)
[![Build Status](https://travis-ci.org/alexbinary/file-exists.svg)](https://travis-ci.org/alexbinary/file-exists)
[![dependencies Status](https://david-dm.org/alexbinary/file-exists/status.svg)](https://david-dm.org/alexbinary/file-exists)
[![devDependencies Status](https://david-dm.org/alexbinary/file-exists/dev-status.svg)](https://david-dm.org/alexbinary/file-exists?type=dev)

Uses [@alexbinary/promisify](https://www.npmjs.com/package/@alexbinary/promisify) by [alexbinary](https://www.npmjs.com/~alexbinary)


## Install

Install using npm or yarn :

```bash
$ npm install @alexbinary/file-exists
# or
$ yarn add @alexbinary/file-exists
```

## Usage

```javascript
let fileexists = require('@alexbinary/file-exists')

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

## Documentation

```javascript
let fileexists = require('@alexbinary/file-exists')
```

### fileexists(filepath)

Checks if a file exists at `filepath`.

This method supports both Promise and node callback style, and resolves with a `boolean` `true` if the file exists, `false` otherwise.

### fileexists.sync(filepath)

Synchronous version. Return `boolean` `true` if the file exists, `false` otherwise.

## License

MIT
