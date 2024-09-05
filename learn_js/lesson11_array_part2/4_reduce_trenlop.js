var arr = [11, 12, 15];
// Thêm phương thức reducefn vào Array.prototype
Array.prototype.reducefn = function(callbackfn, initialvalue){   
// thêm phương thức mới vào tất cả các mảng.
// Truyền tham số là 1 hàm callbackfn để tính toán cộng dồn.
// Truyền tham số còn lại là giá trị khởi tạo ban đầu cho tính toán cộng dồn.

    var acc = initialvalue === undefined ? this[0] : initialvalue;    
    // This ở đây là mảng.
    // Khởi tạo acc nếu undefined thì lấy giá trị ban đầu, ngược lại thì lấy tham số truyền vào.
    var startIndex = initialvalue === undefined ? 1 : initialvalue;
    // Khởi tạo startIndex cho vòng lặp i nếu undefined thì lấy giá trị 0, ngược lại thì lấy tham số truyền vào.
    for( let i = startIndex; i < this.length; i++){
        acc = callbackfn(acc, this[i]);
    }
    return acc;
}
// Tạo Callback function:
var cb = function callbackfn(accumulator, value){
    // cb ở đây là 1 biến để lưu hàm callback: Đây gọi là hàm Expression
    return accumulator + value;
}
var kq = arr.reducefn(cb, 1);
console.log(kq);

// reduce mình tự tạo bằng cách thêm phương thức cho array.
// khởi tạo function với 1 hàm callback và giá trị khởi tạo giống reduce mặc định.
// Tạo hàm callback với chức năng riêng.
