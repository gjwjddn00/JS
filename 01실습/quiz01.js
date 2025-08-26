// 어떤 수에서 - 랜덤한 값을 빼주면 음수값이 나올 수 있습니다.
// -5 ~ 5사이의 랜덤한 값을 출력해 줍니다.
// 이 값이 언제든 절대값으로 나오도록 3항연산식을 세워보세요.

// let x = 5 - parseInt((Math.random() * 11));
// let result = x < 0 ? -x : x;
// console.log(result);


// 1~10까지 랜덤한 수를 생성합니다.
// 이 숫자가 3의 배수라면 "3의배수",
//  3의배수가 아니라면 "3의 배수가 아닙니다" 를 출력하세요

let x = parseInt(Math.random() * 10) + 1;
console.log(x);
let result = (x % 3 == 0) ? "3의 배수" : "3의 배수가 아닙니다";
console.log(result);