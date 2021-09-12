# get-non-builtin-props

[![npm version](https://img.shields.io/npm/v/get-non-builtin-props.svg)](https://www.npmjs.com/package/get-non-builtin-props)

Get non-builtin properties on the `window` object

Live demo available at [here](https://keqingrong.github.io/get-non-builtin-props/example/index.html).

## Installation

```sh
$ npm install get-non-builtin-props
```

## Usage

```js
import getNonBuiltinProps from 'get-non-builtin-props';

const nonBuiltinProps = getNonBuiltinProps();
const nonBuiltinPropKeys = Object.keys(nonBuiltinProps);

console.log('non-builtin properties', nonBuiltinProps);
console.log('non-builtin property keys', nonBuiltinPropKeys);
// ["React", "ReactDOM", "$", "jQuery", "_"]
```

```js
import('https://unpkg.com/get-non-builtin-props/dist/get-non-builtin-props.esm.js')
  .then(({default: getNonBuiltinProps}) => {
    console.log(getNonBuiltinProps());
  })
  .catch((err) => {
    console.log(err);
  });
```

## License

MIT
