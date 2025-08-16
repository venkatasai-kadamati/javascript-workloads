// Is JavaScript a synchronous language?
// Properties
// 1. js is synchronous in nature - all code execution is done linearly, one after the other, and a clear note is that it is never async in nature.

// 2. js is a single-threaded-example: social media app, a person likes a post, and the app sends a notification to the server. The server will send a notification to all the people who liked the post. This is done in a single thread, and the server will not send notifications to all the people at once. It will send notifications one by one.

// 3. js is blocking in nature - example: a person likes a post, and the app sends a notification to the server. The server will send a notification to all the people who liked the post. This is done in a blocking way, and the server will not send notifications to all the people at once. It will send notifications one by one.

// we often notice that js supports async workloads, but this contradicts the point that js is synchronous in nature. The reason is that js is a single-threaded language, and it uses an event loop to handle async workloads. The event loop is a mechanism that allows js to handle async workloads without blocking the main thread. The event loop is responsible for executing the code in the call stack and handling the async workloads in the callback queue. When an async workload is completed, the event loop will push the callback function to the call stack, and the callback function will be executed


console.log("hi")
setTimeout(function sample() {
    console.log("waiting for the timer to set off")
}, 1000)
console.log("bye")


