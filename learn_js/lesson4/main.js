/*
Hàm (function)
Quy tắc đặt tên cho hàm:
1. Tên hàm chứa chữ cái a-z A-Z 0-9 _ $ 
2. Không được đặt số ở ký tự đầu tiên.
*/

function showDialog(){
    alert('Hi xin chào các bạn.');
}

// toán tử call. () 
showDialog();

/*
Tham số trong hàm.
*/

// function writelog(message){
//     console.log(message);   // message là tham số.
// }
// writelog('Test message');  // Test message là đối số. 

// Nếu truyền vào nhiều tham số thì giữa các tham số cần thêm dấu ,
function writeLog2(message, message2){
    console.log(message);

    if(message2){
        console.log(message2);
    }
}
writeLog2('Log1', 'Log2');


// từ khóa return trong hàm.
function cong(a, b){
    return a + b;
}

var result = cong(2, 8);
console.log(result)

// about function.
/**
 * About Function
 * 1. Khi function tạo ra bị lặp, khi hàm được gọi thì chỉ có hàm tạo sau cùng được thực thi.
 * 2. Khi định nghĩa biến trong hàm thì phạm vi biến chỉ thực thi được trong hàm.
 * 3. Hàm trong hàm: Cũng như tham số, cũng như biến, hàm tạo trong hàm chỉ chạy được trong hàm bao bọc.
 */

/**
 * Các loại function.
 * 1. Declaration function. Định nghĩa bắt đầu là function và phải có tên của function. Declaration function có thể gọi trước khi định nghĩa.
 * 2. Expression function.  Định nghĩa bắt đầu với một biến, được gán = 1 function. Có thể đặt tên function hoặc không.
 * 3. Arrow function.
 */

