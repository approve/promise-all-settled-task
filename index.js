// Example promises
const promise1 = Promise.resolve(100);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'error'));
const promise3 = Promise.resolve('success');

function promiseAllSettled(promises) {
    // Your implementation goes here
}

// Usage of the custom promiseAllSettled function
promiseAllSettled([promise1, promise2, promise3])
    .then(results => {
        console.log(results);
        // Expected output:
        // [
        //   { status: 'fulfilled', value: 100 },
        //   { status: 'rejected', reason: 'error' },
        //   { status: 'fulfilled', value: 'success' }
        // ]
    })