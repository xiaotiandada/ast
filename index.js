const recast = require("recast");

// Let's turn this function declaration into a variable declaration.
const code = [
  "function add(a, b) {",
  "  return a +",
  "    // Weird formatting, huh?",
  "    b;",
  "}"
].join("\n");

console.log('code', code)

// Parse the code using an interface similar to require("esprima").parse.
const ast = recast.parse(code);

console.log('ast', ast)
console.log('ast body', ast.program.body)
console.log('ast body 1', ast.program.body[0].body)