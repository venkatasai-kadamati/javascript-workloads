function mainfunc(x, cb) {
    console.log("printing from the main func: ", x);
    cb(x);
}

function cb(inputVal) {
    console.log("printing from the callback: ", inputVal);
}

mainfunc(10, cb);