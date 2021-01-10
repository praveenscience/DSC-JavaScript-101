const OneToTen = Array.from(Array(10).keys()).map(n => n + 1);
console.log(OneToTen);
// Sum of numbers from 1 to 10.
console.log(OneToTen.reduce((acc, cur) => acc + cur, 0));
// Product of numbers from 1 to 10.
console.log(OneToTen.reduce((acc, cur) => acc * cur, 1));
