/* 
1. registUser(유저 객체)를 하나 생성합니다.
2. 전달된 유저 객체의 name값이 2글자 이하이거나, 비어있으면 예외처리를 진행합니다.
3. 유저객체 안에 name값이 정상값이라면, 유저의 이름을 반환하면 됩니다.
*/


let user = {name : "", addr : "서울시"};
function registUser(user) {
    let name = user.name;
    try {
        if(name.length <= 2) {
            throw new Error("name 값이 2글자 이하이거나 비어있습니다");
        } else {
            return name;
        }
    } catch (error) {
        console.log(error.message); // 에러의 메시지를 볼 수 있습니다.
        return null;
    }
}
user.name = "빈값";
console.log(registUser(user));