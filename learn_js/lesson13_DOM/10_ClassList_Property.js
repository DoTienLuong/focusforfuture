// ClassList Property
var boxElement = document.querySelector('.box');
console.log(boxElement.classList);

// add: thêm class vào element:
boxElement.classList.add('red', 'blue', 'green');

// contains: kiểm tra class có trong element không
boxElement.classList.contains('red'); // true or false;

// remove: xóa class trong element
boxElement.classList.remove('red');

// toggle: kiểm tra class trong element, nếu có thì gỡ bỏ, ko có thì thêm vào??? =))????
// lặp đi lặp lại liên tục sau mỗi lần click.
setInterval(()=>{
    boxElement.classList.toggle('red');
}, 1000);

