// shows working of core promise with then + catch
// idea of promise is that we pass and work with 2 callback -> one for success and other for failure
// simple initution we are moving away from callback based async implementation, so in promise function the inputs are everything minus the callback.
const fs = require("fs");
function fsReadFilePromisified(filePath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// callbacks
// success
function successCall(data) {
  console.log(data);
}
// error
function errorCallErr(err) {
  console.log("somethings wrong", err);
}
fsReadFilePromisified("a.txt", "utf-8").then(successCall).catch(errorCallErr);
