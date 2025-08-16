// js is not that strong based on its default implementation
// but now a days it is extensible in general for many tasks.

// reason for it inherently being weak - runtime !!!
// whenever a js script is ran, the code is executed against a runtime
// runtime = bundles all the executables and additional functionalities needed to make js powerful for all usecases. Example: In ECMA definition of JS we don't have setTimeout, this is an extension - browser based js is also a runtime (v8-chrome).


// in simple terms runtime feeds the additional functionalities into the native js language making it really effective

// !!! The most important note: Js native process happen in synchronous manner without any halt. So in our context of async (non-native) we have it provided and handled by the runtime.




function timeConsumingLoop() {
    console.log("loop starts")
    for (i = 0; i < 1000000; i++) {
        // some task 
    }
    console.log("loop ends")
}

function timeConsumingByRuntimeFeature() {
    console.log("starting timer")
    setTimeout(function exec() {
        console.log("completed the timer");
    }, 5000)
}
console.log("hi");

timeConsumingLoop();
timeConsumingByRuntimeFeature();
timeConsumingLoop();
console.log("bye");

// is runtime a compiler like java ??? 