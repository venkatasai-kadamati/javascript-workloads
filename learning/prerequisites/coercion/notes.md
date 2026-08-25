### Coercion in JavaScript

Coercion in simple words is just JavaScript's way of converting one data type to another. It can be implicit (automatic)
or explicit (manual).
---

### 2 Types of Coercion

1. Explicit Coercion: This is when you manually convert a value from one type to another using functions like
   `String()`, `Number()`, or `Boolean()`.
   ```javascript
   let num = 42;
   let str = String(num); // Explicit coercion to string
   console.log(str); // "42"
   ```
2. Implicit Coercion: This happens when JavaScript automatically converts values during operations. For example, when
   you use the `+` operator with a string and a number, JavaScript converts the number to a string.
   ```javascript
   let num = 42;
   let str = "The answer is " + num; // Implicit coercion to string
   console.log(str); // "The answer is 42"
   ```

---

### Why Coercion Matters

JS engine is loosely typed, which allows flexibility. But it can lead to unexpected issues. So keep the engine running
instead of trying to throw an error, JS automatically converts the data types to make the operation work.

> JS does this by using some set of rules. These rules are internal engine function called as "Abstract Operations".

---

### Coercion Rules

We just need to learn 4 abstract operations to understand how coercion works in JavaScript:

1. ToBoolean: converts value to boolean (true/false)

- Hack/Tip: We have only 6 falsy values:  `false`, `0`, `-0`, `""` (empty string), `null`, `undefined`, and `NaN`.
  Everything else is truthy.
- Trick: You can use double negation `!!` to convert any value to its boolean equivalent.

```javascript
console.log(!!0); // false
console.log(!!"Hello"); // true
```

2. ToNumber: converts value to a number

- Hack/Tip: When converting to number, JavaScript follows specific rules. For example, an empty string `""` becomes `0`,
  while a non-empty string that cannot be parsed as a number becomes `NaN`.
- Trick: You can use the unary plus operator `+` to convert a value to a number.
- Example:

```javascript
console.log(+"42"); // 42
console.log(+""); // 0
console.log(+"abc"); // NaN
``` 

3. ToString: converts value to a string
4. ToPrimitive: converts an object to a primitive value (string, number, or boolean) based on the context of the
   operation.

### Coercion Pitfalls

1. Special cases involve null and undefined when compared with other types.

- Standard rule: if null is present in comparison it doesn't get coerced to any other type, it only equals to undefined
  and nothing else. Same goes for undefined.

```javascript
console.log(null == 0); // false
console.log(undefined == 0); // false
console.log(null == undefined); // true
console.log(null == false); // false -- major pitfall as usually we expect ToNumber(null) to be 0, but in comparison it doesn't get coerced to number
```

### Practial Insights

1. When either of the operands is a string, JavaScript will convert the other operand to a string and perform string
   concatenation.
2. When both operands are numbers, JavaScript will perform numeric addition.
3. When one operand is a boolean, JavaScript will convert it to a number (true becomes 1 and false becomes 0) and
   perform numeric addition.
   example:

```javascript
console.log(true + 2); // 3
console.log(false + 5); // 5
```

4. When one operand is null or undefined, JavaScript will convert it to a number (null becomes 0 and undefined becomes
   NaN) and perform numeric addition.
   example:

```javascript
console.log(null + 5); // 5
console.log(undefined + 5); // NaN
```

5. When one operand is an object, JavaScript will attempt to convert it to a primitive value (using the object's
   `toString()` or `valueOf()` method) and then apply the above rules based on the resulting primitive type.