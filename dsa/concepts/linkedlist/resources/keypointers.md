1. Find tail: start at `head` and keep moving forward until a node points to `null`.

```javascript
let currentNode = head;
while (currentNode.next !== null) {
    currentNode = currentNode.next;
}
```

Simple notes:

    1. find tail - curr.next
    2. find second last - curr.next.next

2. Find length: walk through each node once and increment a counter on every step.

```javascript
let length = 0;
let currentNode = head;
while (currentNode !== null) {
    length++;
    currentNode = currentNode.next;
}
```

3. Find middle: use two pointers, `slow` (1 step) and `fast` (2 steps); when `fast` ends, `slow` is at the middle.

```javascript
let slow = head;
let fast = head;
while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
}
```

4. Find nth from end: move `fast` ahead by `n` nodes, then move both pointers together until `fast` reaches `null`.

```javascript
let slow = head;
let fast = head;
for (let i = 0; i < n; i++) {
    fast = fast.next;
}
while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
}
```

5. Reverse list: for each node, redirect `next` to the previous node, then advance `prev` and `current`.

```javascript
let prev = null;
let current = head;
while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
}
head = prev;
```