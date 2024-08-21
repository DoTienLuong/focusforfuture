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