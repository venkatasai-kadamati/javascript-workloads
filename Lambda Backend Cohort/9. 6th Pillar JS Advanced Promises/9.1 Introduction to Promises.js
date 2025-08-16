// We did have async callbacks available for usage, but the major downside was code reability and callback hell along with inversion of control.

// promises = programmic readability enhancers .. better way of writing down callbacks. Help solve inversion of control in callbacks

// In js, promises are special types of objects that get returned immediately when we call them.

// recap IOC - suppose we have a callback function func(x,cb){
// for loop
// cb(); ---- we aren't sure about the cb() function behaviour and surety of its working
// }


// Promises act as a placeholder for the data we hope to get back sometime in future.
// Suppose we have a function fetch("http://ww.yxyz") -- the assumption is that fetch function will download the page content and would act as a time consuming implementation.

// Now suppose that the fetch function is written using promise then it will immediately return a promise object which will act as a placeholder for the result.

// In the promise objects we can attach the functionality we want to execute once the future task is done.
// example: on UI you click a button to download all movies (future task), once downloading is done, now we want to print the names of the downloaded movies (deferred task). Promsies will automically execute the attached functionality.


// Callback vs promises: IOC issue is resolved in promises.

// Another big win for promises is that for any new adhoc task dependant on the future task we run, we can eventually after some code snippets list it. This isn't the case with callbacks as we need to mention it immediately during the callback (HOF) definition.