// CallBack?

// Là hàm (function) được truyền qua đối số.
// Khi gọi hàm khác

// 1. Nó là hàm
// 2. Được truyền qua đối số.

function myFunction(myCallBack){
    if(typeof myCallBack === 'function'){
        myCallBack('Đỗ Tiến Lượng');
    }
}

function myCallBack(value){
    console.log('Giá trị test: ', value);
}

myFunction(myCallBack);

// CallBack được hiểu là hàm đc gọi trong hàm. 