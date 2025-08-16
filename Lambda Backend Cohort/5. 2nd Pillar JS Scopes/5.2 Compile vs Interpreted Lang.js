/**
 * Code Execution Models: Compilation vs. Interpretation
 *
 * Programming languages execute code through different mechanisms, each with distinct advantages:
 *
 * 1. Compilation
 *    - Process: Entire source code is translated to machine code before execution
 *    - Characteristics:
 *      • Single-phase translation of complete source code
 *      • Creates a standalone executable file
 *      • Performs thorough error checking and optimization before runtime
 *    - Examples: C, C++, Rust
 *    - Advantages:
 *      • Faster execution speed
 *      • Early error detection
 *      • Better optimization opportunities
 *    - Disadvantages:
 *      • Longer startup time
 *      • Platform-specific executables
 *
 * 2. Interpretation
 *    - Process: Source code is executed line-by-line during runtime
 *    - Characteristics:
 *      • No separate compilation step
 *      • Code is translated and executed on-the-fly
 *      • Errors are discovered during execution
 *    - Examples: Shell scripts, traditional Python, Ruby
 *    - Advantages:
 *      • Immediate execution
 *      • Platform independence
 *      • Easier debugging in some cases
 *    - Disadvantages:
 *      • Generally slower execution
 *      • Runtime errors discovered later
 *
 * 3. Hybrid Approaches
 *    - Just-In-Time (JIT) Compilation: Combines both approaches
 *    - Process: Code is compiled to bytecode, then JIT-compiled to machine code at runtime
 *    - Examples: Java (JVM), JavaScript (modern engines), C# (.NET)
 *    - Java specifically:
 *      • Not purely compiled or interpreted
 *      • First compiled to bytecode (.class files)
 *      • Bytecode is interpreted or JIT-compiled by JVM during execution
 */


