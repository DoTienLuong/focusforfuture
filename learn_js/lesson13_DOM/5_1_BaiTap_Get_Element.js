/**
 * Sử dụng các biến đã cho sẵn dưới đây
 */

var productsListElement = document.getElementsByClassName("products-list")[0];
var firstProductElement = document.getElementsByClassName("product")[0];
// getElementsByClassName -> kết quả trả về là 1 mảng HTML Collection, vì thế muốn lấy element đầu tiên thì phải thêm vị trí.
var buttonElements = document.getElementsByTagName("button");
console.log(firstProductElement);


// Bài tập Get Element cấp 2:
var getTitleFormProduct = firstProductElement.querySelector('h3');  // truyền thẻ h3 vào
var getTitleFormProduct2 = firstProductElement.querySelector('.title');  // truyền thẻ có class .title vào
console.log(getTitleFormProduct);
console.log(getTitleFormProduct2);

// Bài tập Get Element cấp 3:

 

