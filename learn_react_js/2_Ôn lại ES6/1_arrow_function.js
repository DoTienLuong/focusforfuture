// Ôn lại function:
// Declaration Function: hàm trực tiếp
function loggerDe(log){
    console.log(log);
}
loggerDe('Đỗ Tiến Lượng');


// Expression Funtion: hàm qua biến
const loggerEx = function(log){
    console.log(log);
}
loggerEx('Học lập trình trên F8');


// => arrow function:
const loggerAr = (log) => {
    console.log(log);
}

// loại bỏ function, thêm vào đằng sau () 1 dấu =>

const loggerAr2 = (a, b) => a + b;
// loại bỏ cả dấu ngoặc, mặc định sau => là return. Nếu có {}, thì {} là khối code.

const loggerAr3 =  (a, b) => ({a: a, b: b})
// muốn return là object thì cần thêm ngoặc tròn., bởi sau => là return
// mà ko 

    const loggerAr4 = (log) => console.log(log);
//->  
    const loggerAr5 = log => console.log(log);
// kho chỉ có 1 tham số, có thể loại bỏ ().



