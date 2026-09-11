const a = 1;
const b = 2;

console.log(a);
console.log(b);

// wait for 1 second
// we can simply trigger a callback after 10 sec's

// BAD MOVE: Forceful For Loop -> busy waiting the CPU - blocks all
// for (let i = 0; i < 1000; i++) {}

// GOOD MOVE:
setTimeout(useCallback, 1000);

function useCallback() {
  console.log(a + b);
}
