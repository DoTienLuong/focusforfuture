/*
    Giới thiệu một số hàm built-in
    1. alert
    2. console
    3. confirm
    4. prompt
    5. setTimeout
    6. setInterval
*/

alert.log('Đây là thông báo xuát hiện 1 lần trên màn hình.');
console.log('Hiển thị nội dung bên tab console');
confirm('Thông báo xuất hiện trên màn hình nhưng có thêm ô Ok và Cancel');
prompt('Thông báo kèm theo ô nhập giá trị.');
setInterval(function() {
    alert('Hiển thị nội dung theo thời gian định sẵn. (1 lần)')
}, 1000);
setTimeout(function() {
    alert('Hiển thị nội dung theo thời gian định sẵn lặp lại nhiều lần')
}, 1000);

// 1000 milisecond = 1 second.
