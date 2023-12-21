// Example promises
const promise1 = Promise.resolve(100);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'success'));
const promise3 = Promise.reject('error');

function promiseAllSettledWithTimeout(promises, timeout) {
    // Your implementation goes here
}

// Usage of the custom promiseAllSettled function
promiseAllSettledWithTimeout([promise1, promise2, promise3], timeout = 0)
    .then(results => {
        console.log(results);
        // Expected output:
        // [
        //   { status: 'fulfilled', value: 100 },
        //   { status: 'fulfilled', value: 'success' }
        // ]
    })