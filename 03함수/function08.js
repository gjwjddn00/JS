// 고차함수 - 함수의 매개변수로 함수가 들어가는 유형 (js가 좋아하는 문법)
// forEach - 반복을 대신함

let arr = [1,2,3,4,5,6,7];

// let mySome = function(item, index) { // 일반적인 익명함수
//     console.log(`값 : ${item} 인덱스 : ${index}`);
// }
// arr.forEach(mysome);


// arr.forEach(function(item, index) { // 한번에 쓰기
//     console.log(`값 : ${item} 인덱스 : ${index}`);
// });


// 화살표 함수
// arr.forEach((item, index) => {
//     console.log(`값 : ${item} 인덱스 : ${index}`);
// });


arr.forEach(item => console.log(`값 : ${item}`)); // 매개 변수 하나 간단히 출력할 때


console.log(`---------------------------------`);


// map - 반환에 담긴 값으로 새로운 배열을 만들어서 돌려줌
// let newArr = arr.map( function(item, index) {
//     return item * item;
// });


let newArr = arr.map(item => item * item);
console.log(newArr);


console.log(`---------------------------------`);


// filter - return에 true인 값으로 조건부 필터링
let newArr2 = arr.filter( function(item, index) {
    return item % 2 === 0; // 짝수 : true, 아니면 false
});

console.log(newArr2);