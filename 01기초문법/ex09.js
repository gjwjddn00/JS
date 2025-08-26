
// 조건문 if

//랜덤한 점수를 하나 생성
let point = parseInt((Math.random() * 100) + 1);
let grade = "합격";

if(point >= 60) {
    grade = "합격";
} else {
    grade = "불합격";
}

console.log("점수 : " + point);
console.log(grade);
console.log("------------ let변수의 scope-----------");

if(true) {
    let name = "김의재"; /* 중괄호 스코프 - 중괄호 안에서 선언된 변수는
                        중골화 안에서만 쓸 수있음 */
}
console.log(name);
