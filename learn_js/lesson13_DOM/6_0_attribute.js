// attribute là thuộc tính của element trong DOM
// text là nội dung của element trong DOM
// element là thẻ trong DOM

var headingElement = document.querySelector('H1');

//Gán trực tiếp:
headingElement.title = "title";           // Thêm title = "heading" cho H1
headingElement.id = "heading";              // Thêm id = "heading" cho H1
headingElement.className = "heading";       // Thêm class = "heading" cho H1, tại vì class là 1 phương thức nên đặc biệt nên ngta phải dùng className

var aElement = document.querySelector('a');
aElement.href = "heading";                  // Thêm href = "heading" cho thẻ a. 
// Phải thêm thuộc tính hợp lệ cho từng thẻ.

//Gán attribute bằng phương thức: dành cho các trường hợp thuộc tính đó không phù hợp cho element
aElement.setAttribute('day', 'heading');    // thêm day = "heading" cho thẻ a.

// Lấy attribute bằng phương thức:
var value = aElement.getAttribute('day');   // => value = "heading"
var value = headingElement.title;           // => value = "title"

