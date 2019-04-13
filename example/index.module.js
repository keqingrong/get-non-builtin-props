import getNonBuiltinProps from '../src/index.js';

const nonBuiltinProps = getNonBuiltinProps();
const nonBuiltinPropKeys = Object.keys(nonBuiltinProps);

console.log('non-builtin properties', nonBuiltinProps);
console.log('non-builtin property keys', nonBuiltinPropKeys);
// ["React", "ReactDOM", "$", "jQuery", "_"]
