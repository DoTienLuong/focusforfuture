//Dom attributes

var headingElement = document.querySelector('h1');

headingElement.title = "heading"; // thêm thuộc tính title = "heading" vào h1.
// lưu ý: Chỉ đc thêm những cái hợp lệ với tên thẻ.




// Nếu muốn đặt attribute không hợp lệ thì phải xài setAttribute
headingElement.setAttribute('d', 'data');    // thêm thuộc tính d = "data" vào h1.

// lấy attribute 
headingElement.getAttribute('d')  // lấy giá trị của thuộc tính d trong h1. 


