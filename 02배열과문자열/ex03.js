/* 
    배열의 반복 for문
*/

let arr = [1,2,3,4,5,6,7];

// 합계
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    sum += arr[i];
}



console.log("---------------------------------")
// for in 구문(index를 뽑아줌)
for(let i in arr) {
    console.log(`인덱스 ${i}, 값 ${arr[i]}`);
}


console.log("---------------------------------")
// for ~ of 구문 E6 - 값을 뽑아줌
for(let value of arr) {
    console.log(`값 ${value}`);
}