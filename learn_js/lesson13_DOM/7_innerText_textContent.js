// innerText: trả về tất cả nội dung hiện trên màn hình và bỏ qua các khoảng cách
// textContent: trả về tất cả textNode và vị trí các thẻ.
// cả hai đều là lấy nội dung và dùng để sửa lại nội dung.


var headingElement = document.querySelector('.heading');
headingElement.textContent = "New Heading";

