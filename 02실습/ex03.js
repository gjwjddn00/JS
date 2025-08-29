// 1. 학생별 점수의 평균을 구해보세요. (중첩)

let students = [
    ["철수", 76, 34, 23],
    ["정재", 30, 99, 76],
    ["남규", 76, 87, 54],
    ["남수", 98, 76, 45]
];

for(let i =0; i < students.length; i++) {
    let studentInfo = students[i];
    let studentName = studentInfo[0];
    let sum = 0;

    for (j = 1; j < studentInfo.length; j++) {
        sum += studentInfo[j];
    }
    let average = sum/(studentInfo.length - 1);
    console.log(`${studentName} : ${average.toFixed(1)} 점`); // tofixed(소수점 자릿수)
}



console.log(`------------------------`);
// 2. 가장 비싼 상품을 찾아서 출력해주세요. ( 최대값 찾기 )
// 결과 --> 시계 : 2,000,000

let products = [
    ["노트북", 1200000],
    ["스마트폰", 800000],
    ["태블릿", 500000],
    ["헤드폰", 300000],
    ["시계", 2000000]
];
let product = products[0][0];
let price = products[0][1];
for(let i = 0; i < products.length; i++) {

    if(price < products[i][1]) {
        product = products[i][0];
        price = products[i][1];
    }
}
    console.log(`${product} : ${price}`);