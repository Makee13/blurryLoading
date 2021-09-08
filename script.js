var percent = 0;
var blur = 30;
const PERCENT = document.querySelector('.percent');
const MAIN = document.querySelector('.main')

setInterval(function() {

    // Xử lý hiệu ứng
    PERCENT.innerText = percent + '%'; 
    PERCENT.style.opacity = `${(100-percent)/100}`;
    MAIN.style.filter = `blur(${blur}px)`

    // Xử lý tăng giảm để đặt hiệu ứng
    percent++; // Do opacity từ 0-1 và do hiển thị từ 0-100% nên mỗi lần tăng lên một
    blur-=0.3; // Tương tự bên trên

    // Xử lý dừng lặp khi đạt 100%
    if(percent === 100) {
        clearInterval(2);
    }
},20)


