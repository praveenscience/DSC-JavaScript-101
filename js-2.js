// Old
var Variable1 = "Nistha";
// New
let Variable2 = "Harsh";
const Variable3 = "Praveen";

const Say1 =
  Variable3 + " is here with " + Variable1 + " and " + Variable2 + ".";
const Say2 = `${Variable3} is here with ${Variable1} and ${Variable2}.`;

console.log(Say1);
console.log(Say2);
console.log(Say1 === Say2);
