
// 1. 구구단 5단 콘솔로 출력
console.log(`------------------------------`);


    let gugu = 5;
    console.log(`구구단 5단`);
    for (let i1 = 1; i1 <= 9; i1++) {
        console.log(`${gugu} x ${i1} = ${gugu * i1}`);
    }

// 2. 7 ~ 100까지 정수중에서 7의 배수를 출력
console.log(`------------------------------`);


    for (let i2 = 7; i2 <= 100; i2++) {
        if ((i2 % 7) == 0) {
            console.log(`7의 배수 : ${i2}`);
        }
    }

// 3. 1~50까지 홀수의 합
console.log(`------------------------------`);

    let sum = 0;
    for (let i3 = 1; i3 <= 50; i3++) {
        if ((i3 % 2) == 1) {
            console.log(`홀수 : ${i3}`);
            sum += i3;
        }
    }
    console.log(`1~50까지 홀수의 합 = ${sum}`);

// 4. 100의 약수의 합
console.log(`------------------------------`);

    let oneH = 100;
    let sum2 = 0;
    for(let i4 = 1; i4 <= oneH; i4++) {
        if ((oneH % i4) == 0) {
            console.log(`${i4}`);
            sum2 += i4;
        }
    }
    console.log(`100의 약수의 합 = ${sum2}`);