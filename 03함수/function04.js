
// 매개변수로 배열을 받고, 배열을 반환하는 함수
/* 
배열의 값중에서 홀수만 필터링 해서, 새로운 배열을 반환하는 함수
ex) 매개변수 -> [1,2,3,4,5];
    반환    -> [1,3,5];
*/

function getNum(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 1) { //홀수 판별
            newArr.push( arr[i] );
        }
    }

    return newArr;
}
let myArr = [1,2,3,4,5,6,7,8,9];
console.log(getNum(myArr));