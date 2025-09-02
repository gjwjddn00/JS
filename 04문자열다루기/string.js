console.log(`==============`);
// 문자열 다루기 함수
let str = "hello world javascript";
console.log(`문자열의 길이 : ${str.length}`);


console.log(`==============`);
//문자열 한글자 자르기
let s1 = str.charAt(3);
console.log(`index 3번째 문자열 : ${s1}`);
console.log(`index 5번째 문자열 : ${str.charAt(5)}`);


console.log(`==============`);
// 특정 문자 기준으로 문자열 자르기
let s2 = str.split("");
console.log(s2);
let s3 = str.split(" ");
console.log(s3);


console.log(`==============`);
// 특정 문자의 위치 자르기
let s4 = str.substring(6, 11);
console.log(s4); // index 6이상 10미만 추출

let s5 = str.substring(10);
console.log(s5); // index 10 미만 문자열 절삭


console.log(`==============`);
// 특정 위치로 문자열 탐색
// hello world javascript
console.log(`l이 처음으로 발견된 위치` + str.indexOf("l"));
console.log("5번째 인덱스 위치에서부터 발견된 o의 위치" + str.indexOf("o", 5));
console.log("뒤에서부터 접근하여 a찾기" + str.lastIndexOf("a"));
console.log("포함되면 true 없으면 false" + str.includes("java"));
console.log("hell로 시작하면" + str.startsWith("hell"));
console.log("'헑'으로 끝나면" + str.endsWith("헑!"));


console.log(`==============`);
// 문자열 변환
// 원본 문자열은 바뀌지 않는다. 반환받으려면 반환받을 변수에 치환받아야한다.
console.log("-".repeat(20)); // 문자열 20회 반복
console.log(str.replace("l", "헐")); // 첫번째 탐색된 문자열(l)을 "헐"로 바꿔준다.
console.log(str.replaceAll("l", "헉")); // 모든 문자열(l)을 "헉"로 바꿔준다.
console.log(" hello   ".trim()); // 양측 공백 제거

let text = "Hello";
console.log(text.toUpperCase()); // 전부 대문자
console.log(text.toLowerCase()); // 전부 소문자