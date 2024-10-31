const orders = [100, 200, 300];

// Cách 1: truyền function vào reduce. 
// Hàm cal sẽ return về 
const cal = (total, cur) => { 
    return total + cur;
}
const total = orders.reduce(cal, 0);
// chạy code:
/**
b1: reduce sẽ tạo ra một biến lưu kết quả cuối cùng. (acc = 0)
b2: reduce duyệt mảng các phần tử và lấy acc = cal (acc, this[i])  
    mà this[i] ở đây là giá trị của các phần tử trong mảng orders.
    hàm cal(acc, this[i]) lại thực hiện phép tính theo cal được khởi tạo (acc + this[i])
b3: duyệt cho tới hết và trả về kết quả cuối cùng.
 */
console.log(total)

// Cách 2:
const total_c2 = orders.reduce(((total, cur)=> total + cur));
// reduce sẽ tạo acc,   acc = (acc, this[i])  
//                  <=> acc = (total, cur), mà (total, cur) return total + cur 
//                   => acc = acc + this[i]
console.log(total_c2)