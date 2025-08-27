
// while 반복문

// while (조건) {
// 조건이 참일 때 반복 실행될 코드
// }

// 조건이 처음부터 거짓(false) 이면 한 번도 실행되지 않음
// 무한 루프에 빠지지 않도록 조건을 변화시키는 코드가 반드시 필요
/* let i = 1;

while (i <= 10) { // i를 이용해서 반복문의 조건식을 만듬

    console.log(i);
    i++;
} */


// 변화하는 i를 더해서 합 구하기

let i = 1;
let sum = 0; // 값을 누적할 변수는 반복문 밖에 선언

while (i <= 10) { // i를 이용해서 반복문의 조건식을 만듬

    console.log(i);
    sum = sum + i
    i++;
}
console.log("합계", sum);