/*
문제 1: 별찍기 (레벨 1)
- 숫자를 받아서 해당 개수만큼 별을 출력하는 함수 printStar를 만들어보세요.
- 반환값이 없는 함수입니다.
*/

console.log(`=======================`);


function printStar(num) {
    for (let i = 1; i <= num; i++) {
        console.log(`*`);
    }
}

printStar(3);

/* 
문제 2: 현재 시간 출력 (레벨 1)
- 현재 시간을 "현재 시간: [시간]" 형태로 출력하는 함수 showTime를 만들어보세요.
- 현재 시간은 아래 함수로 구할수 있습니다.
let now = new Date();
let hours = now.getHours();      // 시 (0-23)
let minutes = now.getMinutes();  // 분 (0-59)
let seconds = now.getSeconds();  // 초 (0-59)
- 반환값이 없는 함수입니다. 
*/

console.log(`=======================`);


function showTime() {
let now = new Date();
let hours = now.getHours();      // 시 (0-23)
let minutes = now.getMinutes();  // 분 (0-59)
let seconds = now.getSeconds();  // 초 (0-59)
console.log(`${now} = ${hours}:${minutes}:${seconds}`);
}

showTime();

/* 
문제 3: 짝수 판별 (레벨 2)
- 숫자를 받아서 짝수인지 홀수인지 판별하는 함수 isEven을 만들어보세요.
- 짝수면 true, 홀수면 false를 반환하세요. 
*/

console.log(`=======================`);


function isEven (hj) {
    if(hj % 2 === 0) {
        return true;    
    } else {
        return false;
    }
}
console.log(isEven(1));

/*
 문제 4: 원의 넓이 (레벨 2)
- 반지름을 받아서 원의 넓이를 계산하는 함수 circleArea를 만들어보세요.
- 원의 넓이 = π × 반지름² (π는 3.14159 사용) 
*/

console.log(`=======================`);


function circleArea (x) {
    console.log(`원의 넓이 = ${3.14159 * (x * x)}`);
}

circleArea(7);

/*
 문제 5: 약수 개수 (레벨 3)
- 양의 정수를 받아서 약수의 개수를 세는 함수 countDiv를 만들어보세요.
- 예시: 12의 약수는 1, 2, 3, 4, 6, 12이므로 6개 
*/

console.log(`=======================`);


function countDiv(cou) {
    let count = 0;
    for(let i = 1; i<=cou; i++) {
        if (cou % i === 0) {
            count ++;
        }
    }
        console.log(`${count}개`);
}

countDiv(12);

/*
 문제 6: 절대값 반환 (레벨 3)
- 숫자를 받아서 절대값을 반환하는 함수 abs를 만들어보세요.
- 예시: abs(-5) → 5, abs(3) → 3 
*/

console.log(`=======================`);


function abs(number) {
    return number < 0 ? -number : number;
}
console.log(abs(-4));

/*
 문제 7: 최대값 반환 (레벨 4)
- 세 개의 숫자를 받아서 가장 큰 수를 반환하는 함수 max를 만들어보세요.
- Math.max() 함수는 사용하지 마세요. 
*/

console.log(`=======================`);


function max(num1, num2, num3) {
    /* if(num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num3 && num2 > num1) {
        return num2;
    } else {
        return num3;
    } */
   let maxNum = num1;
   if (num2 > maxNum) maxNum = num2; // if문에서 코드가 한줄이면 {} 생략 가능
   
   if(num3 > maxNum) {
    maxNum = num3;
   }
   return maxNum;
}
console.log(max(3, 5, 7));

/*
 문제 8: 완전수 판별 (레벨 5)
- 양의 정수를 받아서 완전수인지 판별하는 함수 isPerfect를 만들어보세요.
- 완전수: 자신을 제외한 약수들의 합이 자신과 같은 수
- 예시: 6의 약수는 1, 2, 3, 6이고, 1+2+3=6이므로 완전수
*/

console.log(`=======================`);

function isPerfect(dou) {
    let result3 = 0;
    for(let i = 1; i<dou; i++) {
        if (dou % i === 0) {
            result3 += i;
        }
    }
    return result3 === dou;
}

console.log(isPerfect(6));