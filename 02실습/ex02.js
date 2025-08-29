console.log(`-----------------------------------`);
// 1. 이 배열의 합계와 평균을 출력해주세요

let number = [10,20,30,40,50];

let sum = 0; // 합계
let avg = 0; // 평균

for (let value of number) {
    sum += value;
}
console.log(`합계 : ${sum} \n 평균 : ${sum / number.length}`);



console.log(`-----------------------------------`);
// 2. 이 배열에서 최대값, 최소값 찾아서 출력.
// 힌트 - 변수를 잘 활용해야함

let score = [85,92,70,96,91,60,100];

let valueH = score[0]; // 최대값
let valueL = score[0]; // 최소값


for(let i =0; i < score.length; i++) {
    if(valueH < score[i]) {
        valueH = score[i];
    }
    if (valueL > score[i]) {
        valueL = score[i];
    }
}
console.log(`최대값 : ${valueH} \n 최소값 : ${valueL}`);



console.log(`-----------------------------------`);
// 3.짝수 필터링
// 이 배열에서 짝수만 필터링하여 evenNum에 저장하세요
let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNum = [];

for(let value3 of numbers) {
    if(value3 % 2 == 0) {
        evenNum.push(value3);
    }
}
console.log(evenNum);



console.log(`-----------------------------------`);
// 4. 배열을 값을 뒤집어서 reverse 배열에 저장하세요.
let arr = [1,2,3,4,5];
let reverse = [];

for(let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
}
console.log(`저장된 reverse배열 : ${reverse}`);
console.log(typeof(reverse));



console.log(`-----------------------------------`);
// 5. target값이 배열에 포함되어 있으면 해당 인덱스를 출력, 없으면 -1을 출력하세요.
let search = ['a', 'b', 'c', 'd', 'e'];
let target = 'e';
let index = -1;
let bool = false;

for(i=0; i<search.length; i++) {
    if(target === search[i]) {
        index = i; // 인덱스 기록
        bool = true; // 찾음 or 못찾음
        break;
    } 
}
if (bool) {
    console.log(`${target} 의 위치는 ${index} 번째 입니다`);
} else {
    console.log(`${target}은 없습니다`);
}



console.log(`-----------------------------------`);
// 6. word배열의 문자열의 길이를 저장하는 wordLength 배열을 만들어 주세요.
let word = ['apple', 'banana', 'melon', 'grape', 'orange'];
let wordLength = []; // 5, 6, 5, 5, 6 문자열길이확인 = 문자열.length

for(let i of word){
    wordLength.push(i.length);
}
console.log(`문자열의 길이 저장 : ${wordLength}`);

console.log(`-----------------------------------`);