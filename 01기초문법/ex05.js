
// 데이터 타입 (각 변수들은 암묵적으로 데이터에 대한 종류를 가지고 있습니다.)
let name = "홍길동"; // 문자열은 홀따옴표 쌍따옴표를 꼭 지정해 주어야함 (string)
let age = 20; // number
let kg = 55.14; // number - 정수, 실수 상관없음

console.log(name + "님의 나이는" + age + "세 이고 몸무게는" + kg + "입니다");

let bool = true;
bool - false;
console.log("거짓은 영어로" + bool);

// null - 초기화는 했지만, 값이 없을 때 나타남'
// code runner에서 document라는걸 사용할 수 없음

//uindefind

let y;
console(y);

let arr = []; //배열
let rg = {}; // 객체

console.log(typeof name);
console.log(typeof age);
console.log(typeof kg);
console.log(typeof bool);

console.log(typeof y);
console.log(typeof arr);
console.log(typeof rg);
