//1
// 반복문의 중첩

/* for(let i = 1; i <= 10; i++) {

    console.log(`${i} 번째 회전i`);

    for(let j = 1; j <=5; j++) {
        console.log(`${i} and ${j}`);
    }
    console.log(`${i} 번째 회전끝`);
} */

// 구구단 2단부터 9단까지 모두 출력

for (let i = 2; i <=9; i++) {
    console.log(`===${i}단===`);
    for(let j = 1; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(); // 자동 줄바꿈
}