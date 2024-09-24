// DOM Style: chỉnh sửa css cho element: css inline. (dùng khi cập nhật thêm css)


var boxElement = document.querySelector('.box');

// cách 1: thêm trực tiếp thông qua style.
boxElement.style.width = '100px';
boxElement.style.height = '100px';
boxElement.style.backgroundColor = 'red';

// Cách 2: thêm qua object:    
Object.assign(boxElement.style, {
    width: '100px',
    height: '200px',
    backgroundColor: 'red',
})

