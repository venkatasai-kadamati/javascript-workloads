// common js -> we can have several functions but we decide what to export
function add(a, b) {
  return a + b;
}

function secret() {
  console.log("this is accessed only within this file");
}

// exporting specific function for access outside
module.exports = {
  add,
};
