# @devteks/guard-fn

- callOnce: Wrapper for a function to be called only once
- guarded: execute function guarded with pre function and post function
- guard: guards function with pre function and post function and return same function signature

## how to use
`npm install @devteks/guard-fn --save` 

## Usage:
import:
```javascript
const { callOnce, guarded, guard } = require('@devteks/guard-fn');
// OR
import { callOnce, guarded, guard } from '@devteks/guard-fn';
```

### Using `callOnce`
```javascript
  const { callOnce } = require('@devteks/guard-fn');
  const fn = callOnce((a, b) => {
    console.log('called with:', a, b);
    return a + b;
  });
  console.log(fn(1, 2));
  // prints `called with: 1 2` and `3`
  fn(1, 2); // 3
  // prints `3`
  fn(1, 2); // 3
  // prints `3`
```

### Using `guarded`
```javascript
const { guarded } = require('@devteks/guard-fn');

(async () => {
    const result = await guarded(
      async () => {
        await delay(1000);
        return 10;
      },
      () => console.log("before run"),
      () => console.log("after run")
    );
    
    console.log("result:", result);
    // prints after delay for 1 second
    // before run
    // after run
    // result: 10
})();
```

### Using `guard`
```javascript
(async () => {
const { guard } = require('@devteks/guard-fn');
  const fn = guard(
    async (a: number, b: number) => {
      await delay(10);
      return a + b;
    },
    () => console.log("before run"),
    () => console.log("after run")
  );

  const result = await fn(1, 2);
  console.log("result:", result);
})();
```
