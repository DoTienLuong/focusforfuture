// innerHTML vs outnerHTML: thêm thuộc tính vào bên trong và bên ngoài element.

var boxElement = document.querySelector('.box');

boxElement.innerHTML = '<h1 title ="heading"> Do Tien Luong </h1>'; 
//  ->> thêm thẻ h1 có attribute title = "heading" với nội dung của h1 Do Tien Luong vào class box.


boxElement.outerHTML // ghi đè thuộc tính 


