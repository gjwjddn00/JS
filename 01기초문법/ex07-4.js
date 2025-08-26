// 논리 연산자

var isAdult = true;
var hasID = false;

console.log("AND (&&):", isAdult && hasID); // false
console.log("OR (||):", isAdult || hasID);  // true
console.log("NOT (!):", !isAdult);          // false


// && - 양쪽 항이 모두 true여야 true
// || - 양쪽 항중 한쪽만 true여도 true
let a = true;
let b = false;

console.log("&&의 결과 : " + a && b); // 현재 문자열과 + a 그리고 && b 가 되었다
//이럴때는 소괄호를 사용한다
console.log("&&의 결과 : " + (a && b)); //이런식으로 소괄호를 치면 먼저 연산된다

console.log("||의 결과 : " + a || b);
console.log("!:" + !a);

// 어떤수가 3의 배수이면서 4의 배수인경우 - 조건식으로

let x = 12;

console.log( x % 3 === 0);
console.log( x % 4 === 0);
console.log( x % 3 === 0 && x % 4 === 0);
