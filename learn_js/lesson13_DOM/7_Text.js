// Trước khi làm việc với text, việc đầu tiên là phải lấy đc element chứa text đó
// Đã là thẻ tag thì đều là elementNode
// Đã là nội dung nằm giữa thẻ tag thì đều là textNode.
//interText, textContent.
var headingElement = document.querySelector('.heading');

// Lấy nội dung: (getter)
console.log(headingElement.innerText);      // Lấy nội dung của text node nằm trong element
console.log(headingElement.textContent);    // Lấy nội dung của text node nằm trong element

//sửa đổi nội dung: (setter)
headingElement.innerText = "new Heading";   // sửa nội dung ban đầu của headingElement thành "new Heading";
headingElement.textContent = "new Heading"; // sửa nội dung ban đầu của headingElement thành "new Heading";


//  getter
//  innerText: lấy ra tất cả các nội dung trong element, bỏ qua các thẻ chứa bên trong. 
// (trả về như những gì mình thấy trên page)
//  innerText là thuộc tính của elementNode.


//  textContent: lấy ra tất cả các nội dung, bỏ qua các thẻ chứa nôi dung con, lấy cả khoảng cách thực.
//  (trả về như những gì thực sự diễn ra trong textElement)
//  trả về tất cả code nằm trong tag cấp kế bên.


//  setter