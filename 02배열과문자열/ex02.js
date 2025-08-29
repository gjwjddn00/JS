
//배열에서 사용하는 다양한 함수

/* 
    ##매우 중요##
    push()	배열 끝에 요소 추가
    pop()	배열 끝에서 요소 제거
    unshift()	배열 앞에 요소 추가
    shift()	배열 앞에서 요소 제거
*/

//배열의 선언을 new Array() - 추천방식은 아님
/*
    let arr = new Array(3); // 크기가 3이면서, 비어있는 배열을 생성
    console.log(arr);
    let arr2 = new Array(1,2,3); // [1,2,3]
    console.log(arr2);
    splice()	요소를 추가/제거/변경
    indexOf()	해당 값의 인덱스 반환 (없으면 1)
    includes()	값 포함 여부 확인 (true / false)
*/


let arr =[1,2,3,4,5];
console.log(arr);
arr.push(6); // 맨 마지막에 6을 추가
console.log(arr);
let item1 = arr.pop(); // 맨 마지막 값을 빼서, 돌려줌
console.log("pop로 나온 값", item1);
console.log(arr);
arr.unshift(100); // 배열에 앞에서 추가
console.log(arr);
let item2 = arr.shift(); // 배열에 앞에서 제거
console.log("shift로 나온 값", item2);
console.log(arr);

// 배열 중간에서의 추가 및 제거

//arr.splice(1,2); // 첫번째 인덱스에서 2개를 제거
//arr.splice(1,1); // 첫번째 인덱스에서 1개를 제거
arr.splice(1,0, 'a', 'b', 'c', 'd', 'e'); // 값을 3개 이상 주면 추가해줍니다.
console.log(arr);

// 탐색관련 함수
let item3 = arr.indexOf(4); // 4가있는 위치를 나에게 반환
console.log(item3); // 만약 찾는값이 없다면 -1을 반환

if(arr.indexOf('a') != -1) { // == a가 배열안에 존재한다
    console.log("a는 존재합니다");
}

if(arr.includes('a')) { // a가 있다면 true, 없으면 false
    console.log('a는 존재합니다');
}

// 배열의 병합 (합치기)
let arr3 = [4, 5, 10];
let arr4 = [1, 2, 3];

let result = arr3.concat(arr4); // 두 배열을 합친 새로운 배열을 반환
console.log(result);

// 배열의 정렬 - 오름차순정렬
result.sort(); // 정렬 진행해!
console.log(result); // 단 - 사전순으로 정렬됩니다.