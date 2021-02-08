# React Prop Null Pointer Example

This repo demonstrates that `eslint` misses flagging potential null pointer exceptions which can occur in components declaring objects/shapes which are not required or with params which are not required.

It should be possible to infer potential null items and flag on usage that these must be either optionally chained or checked for validity before use.

## Usage

```
npm i
npm run verify
```

This will show no errors

```
npm run webpack
```

Now open one of the `*.html` files in a browser. Two examples will fail with JS errors, one will work. These indicate different possible runtime conditions of the component which are currently only caught at runtime but which could feasibly be caught by examining the code structure.
