# Promise.allSettled Task

The native `Promise.allSettled` function in JavaScript returns a promise that resolves after all the given promises have either been fulfilled or rejected, with an array of objects describing the outcome of each promise.

Your task is to implement a custom function named `promiseAllSettled` that mimics the behavior of the native `Promise.allSettled`.

This function should accept an iterable of promises and return a promise that resolves with an array of result objects after all the given promises have been settled. Each result object should contain the status string (either `'fulfilled'` or `'rejected'`) and the value (for fulfilled promises) or the reason (for rejected promises).

After implementing the `promiseAllSettled` function, use it to handle multiple promises and log the outcomes.

### Notes

1. Ensure that the function handles an empty array of promises and returns an immediately resolved promise with an empty array.
2. Consider edge cases, such as non-promise values in the iterable, and handle them appropriately.
3. Write clean, readable, and maintainable code.