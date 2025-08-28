
// 반복문의 중첩 활용
/* 
반복의 회전은 바깥회전에 따라서 안쪽회전이 바뀔 수 있음
바깥반복문 - 행
안쪽반복문 - 별 출력
*
**
***
****
*****
*/

let star =5;
let result1 = "";
for(i=1; i<=star; i++) {
    for(let j=1; j<=i; j++) {
        result1 += "*";
    }
    //5번 반복후 줄바꿈
    result1 += "\n";
}
console.log(result1);

console.log(`--------------------------------`);

/* 
*****
****
***
**
*
만들어보기
*/

let result = "*";

for(k=1; k <= 5; k++) { //행
    for(e=1; e <= 6 - k; e++) { // 별 출력
        result += "*";
    }
    result += "\n";
}
console.log(result);