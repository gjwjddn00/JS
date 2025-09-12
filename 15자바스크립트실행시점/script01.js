//window.onload - 화면이 완전히 그려진 이후에 실행

window.addEventListener("load", () => {

    let box = document.getElementById("box");
    box.onclick = function(e) {
        alert(e.target);
    }

})

// 2. document.DOMContentLoad - 태그가 그려진 이후에 실행(CSS, 이미지 상관x)
document.addEventListener("DOMContentLoaded", () => {
    box.onmouseover = function(e) {
        console.log(e.target);
    }    
})