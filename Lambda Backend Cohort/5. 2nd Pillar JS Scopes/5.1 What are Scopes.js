/**
 * JavaScript Scopes: Understanding Visibility and Access
 *
 * Scope defines the accessibility or visibility of variables, functions, and objects
 * in different parts of your code during runtime. Think of scope as the "territory"
 * where a particular identifier (variable/function name) is recognized and accessible.
 *
 * Key Concepts:
 *
 * 1. What Scope Does:
 *    - Determines where variables and functions are visible
 *    - Controls the lifetime of variables
 *    - Provides a mechanism for data encapsulation
 *
 * 2. Identifier Usage Patterns:
 *    - LHS (Left-Hand Side): When a value is assigned to an identifier
 *      Example: x = 10; // 'x' is used as a target for assignment
 *    - RHS (Right-Hand Side): When a value is retrieved from an identifier
 *      Example: console.log(x); // 'x' is used as a source of value
 *
 * 3. Types of Scope in JavaScript:
 *    - Global Scope: Variables/functions declared outside any function/block
 *      Available throughout the entire program
 *    - Function/Local Scope: Variables/functions declared inside a function
 *      Only accessible within that function
 *    - Block Scope (ES6+): Variables declared with let/const inside a block
 *      Only accessible within that block
 *    - Lexical/Static Scope: Nesting of scopes based on where
 *      functions/blocks are defined in the code
 *
 * 4. Scope Chain:
 *    - When a variable is referenced, JavaScript looks for it in the current scope
 *    - If not found, it looks in the outer containing scope
 *    - This process continues up to the global scope (scope chain)
 *    - If still not found, it's either undefined or throws a ReferenceError
 */