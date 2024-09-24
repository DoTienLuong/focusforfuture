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


// bài tập: 
var eleH1 = document.querySelector('h1');
eleH1.classList.add('title');

var eleSub= document.querySelector('p');
eleSub.classList.remove('sub-title');
eleSub.classList.add('content');

// Thêm class title vào thẻ h1
// Thay thế class sub-title ở thẻ p bằng class content

// bài tập 2:
var eleDiv = document.querySelectorAll('div');
eleDiv.forEach((element)=>{
    element.classList.add("box");
})

