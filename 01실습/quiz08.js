
// 문제1
//100까지의 수 중에서 3의 배수이면서 4의 배수인 수를 출력

let i = 1;

while (i <= 100) {
    if ((i % 3) == 0 && (i % 4) == 0 ) {
    console.log(`3의 배수이면서 4의 배수인 수 : ${i}`);
    }
    i++;
}

// 문제2
//524의 약수의 개수

let x = 1;
let c = 524;
let add = 0;

while (x <= c) {
    if ((c % x) == 0) {
        console.log(`524의 약수 : ${x}`);
        add++;
    }
    x++;
}
console.log(`약수의 개수는 ${add}개 입니다`);

// 문제3
// 100까지의 수중에서 9의 배수의 합계

let y = 1;
let sum = 0;

while (y <= 100) {
    if ((y % 9) == 0) {
        sum += y;
    }
    y++
}
console.log(`100까지의 9의 배수합 : ${sum}`);