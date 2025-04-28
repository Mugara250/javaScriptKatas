function promiseHelloWorld() {
    return new Promise((resolve, reject) => {
        resolve("Hello World!");
    })
    .then(response => {
        console.log(response);
    })
}
promiseHelloWorld();