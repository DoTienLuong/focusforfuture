//HTML DOM

// 1. Element: ID, Class, tagName, 
//    CSS selector, HTML collection
// 2. Attribute
// 3. text

1// doucument.getElementByID('Tên ID');
var testGetID = document.getElementById('heading'); // lấy các thẻ có id = heading. (truyền vào ID của thẻ)

console.log(
    {
        element: testGetID        // Tạo object chứa key là element và value là headingNode
        // kq trả về là 1 tên thẻ vs id của thẻ đó.
    }
);
// Element là số ít bởi vì: 1 trang web chỉ có 1 ID, nếu get ElementByID mà ko hiện thì kiểm tra lỗi này.


2// document.getElementsByClassName('Tên Class');
// Elements là số nhiều vì class có thể trùng tên nhau.
var testGetClass = document.getElementsByClassName('heading');
// => Kết quả là trả về 1 mảng HTMLCollection chứa các phần tử chứa thẻ class = heading.

3// document.getElementsByTagName('H1');
// select qua tên của thẻ
var testGetTag = document.getElementsByClassName('p');

4// docutment.querySelector('.heading .nav .subnav')
// CSS Selector được hiểu là làm CSS như nào thì đưa vào querySelector y chang.
var testCSS_Selector = document.querySelector('.header .home .nav');
// nếu muốn selector tất cả các element trùng class thì cần dùng querySeletorAll.
var tesCSS_Selector2 = document.querySelectorAll('.header .home .nav');
// kết quả trả về là 1 mảng chứa tất cả các element giống nhau về selector.


5// HTML Collection 
// HTML Collection cung cấp 1 vài phương thức hỗ trợ get selector.
// ví dụ:
console.log(document.forms) // trả về tất cả các element có trong form mà ko cần phải get qua ID hay class.
console.log(document.forms[1])// lấy phần tử thứ 2 trong form
console.log(document.forms[1])
console.log(document.forms['ID1']) // lấy form theo ID
console.log(document.forms.formTest)// lấy form với ID theo đúng quy chuẩn đặt tên.
console.log(document.anchors); // trả về tất cả thẻ a có attribute name (tuy nhiên anchors đã bị loại bỏ khỏi HTML Collection)