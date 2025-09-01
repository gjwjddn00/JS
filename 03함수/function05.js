
function some() {
    console.log(`say hello!`);
}

// let x = some(); // 호출해서 결과를 반환 받겠다(소괄호 사용시)
let x = some;
console.log(x);
x(); // x를 함수처럼 사용 가능해짐

// sayHello(); // 익명함수는 호이스팅 안됩니다

let sayHello = function() {
    console.log("sayHello!!");
}
sayHello();


// 두 수의 덧셈을 반환하는 익명함수

let add = function(a, b) {
    return a + b;
}
console.log(add(1, 2));
