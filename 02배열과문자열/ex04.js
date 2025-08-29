//변수의 swap
/* let x = 100;
let y = 54;
let temp = 0;

temp = x;
x = y;
y = temp;

console.log(`x값 ${x}, y값 ${y}`); */



// 정렬 - 선택정렬 - 가장 작은 값을 앞으로 가져온다

// 바깥 반복문을 타겟 index, 안쪽 반복문을 비교할 index
let arr = [100, 64, 30, 22, 54, 88, 76];

for(let i = 0; i < arr.length -1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);
