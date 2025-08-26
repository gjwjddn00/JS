//비교 연산자

var x = 5;
var y = "5";

console.log("== :", x == y);       // true (값만 비교)
console.log("!= :", x != y);       // false
console.log("< :", x < 10);        // true
console.log("> :", x > 10);        // false
console.log("<= :", x <= 5);       // true
console.log(">= :", x >= 6);       // false

// js에만 있는 연산자

// 세개짜리 연산자를 사용하는 편이 좋다
console.log("=== :", x === y);     // false (값 + 타입 비교)
console.log("!== :", x !== y);     // true