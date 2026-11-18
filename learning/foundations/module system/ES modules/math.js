// named export
export function add(a, b) {
  console.log(a + b);
}

// default export
export default function sub(a, b) {
  console.log(a - b);
}

function secret() {
  console.log("not to shared outside this file");
}
