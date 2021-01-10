let Fruits = ["Apples", "Bananas", "Cherries"];
console.log(Fruits.join(" and "));
console.log(Fruits.map(fruit => `I have many ${fruit}.`).join("\n"));
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(
  Numbers.map(num => `The square of ${num} is ${num * num}.`).join("\n")
);
