/**
 * JavaScript Execution Phases and Variable Behavior
 *
 * JavaScript code execution happens in two distinct phases:
 *
 * 1. Parsing (Compilation) Phase
 *    - Scope resolution occurs
 *    - JS engine reads the entire code and sets up scopes
 *    - Only formal declarations (var, let, const, function) are registered
 *    - Memory allocation for declared variables
 *
 * 2. Execution Phase
 *    - Dynamic value assignment happens
 *    - Code runs line by line
 *    - Autoglobals are created for undeclared variables
 *
 * This example demonstrates how these phases affect variable access and scope.
 */

// Global variable declaration
var teacher = "samsung";

function func() {
    // Local variable with the same name as global - creates a new variable in function scope
    var teacher = "honda";

    // Undeclared variable - will become an auto global
    content = "JS";

    console.log(teacher); // Outputs: "honda" (uses function-scoped variable)
}

function gun() {
    var student = "sarthak";
    console.log(student); // Outputs: "sarthak"
}

// This will cause a ReferenceError if run before func() is called
// console.log(content);
/* 
 * Why this fails:
 * 1. During the parsing phase, 'content' is not formally declared (no var/let/const)
 * 2. JS doesn't allocate memory for it initially
 * 3. When execution reaches this line, JS looks for 'content' in global scope
 * 4. Since it doesn't exist yet, a ReferenceError occurs
 */

// Function call creates the autoglobal 'content'
func(); // Outputs: "honda"

gun(); // Outputs: "sarthak"

// Now 'content' exists as an autoglobal
console.log(teacher); // Outputs: "samsung" (uses global variable)

/**
 * Autoglobals Explained:
 *
 * When a variable is assigned without a formal declaration (no var/let/const):
 * 1. JS checks all enclosing scopes for variable
 * 2. If not found anywhere, it creates the variable in global scope
 * 3. This behavior is called "autoglobal" or "implicit global"
 *
 * After func() is called:
 * - 'content' becomes available globally
 * - Any subsequent code can access it without errors
 *
 * Note: This behavior is considered bad practice and is disabled in strict mode
 * with the statement 'use strict'
 */