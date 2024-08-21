/*
Toán tử so sánh == khác với ===
https://viblo.asia/p/toan-tu-va-trong-javascrip-khac-nhau-nhu-the-nao-nen-su-dung-cai-nao-aWj536R1l6m



*/



// Có 6 giá trị khi convert sang booleen sẽ là null
/*
0
false
' ' - ""
underfined
NaN (Not a number)
null 

Sự khác biệt giữa null, NaN, undefined: https://viblo.asia/p/javascript-null-undefined-va-nan-4dbZNwLklYM

*/


// Các kiểu dữ liệu:
//Number type:
var a = 1;
var b = 2;
var c = 1.5;

console.log(typeof a); // Kiểm tra kiểu dữ liệu.

// String type:
var fullName = "Son \"Dang"; // muốn viết nháy trong cặp ngoặc thì phải thêm dấu xược.

// Boolean type:
var isSuccess = true;

// undefined type:
var age; // khai báo mà ko gán thì tức là biến đó = undefined (không có biết kiểu dữ liệu hay giá trị là gì.)

// null:
var isNull = null; // nothing (Không có gì gán vào biến này)

// symbol type:
var id = Symbol('id'); // symbol có đặc tính unique (tính duy nhất)

// Kiểu phức tạp.
// Function:
var myFunction = function(){
    alert('Hi, hôm nay tôi học rõ về function');
}
myFunction();

//Object types: 
var myObject = {
    name: 'Tiến Lượng',
    age: 21,
    adress: 'Bien Hoa, Dong Nai'
};
//Object trông giống json. 

var myArray = [
    'Javascript',
    'PHP',
    'Diamon'
];

/*
Array khác với Object là ko cần định nghĩa key value.
Array nó sẽ tự gán giá trị cho các value theo thứ tự 0, 1, 2.
*/



/**
 * Hiểu hơn về câu điều kiện và phép so sánh.
 */
var a = 1;
var b = 2;

var result = a < b && a < 0;
// console.log('resut', result);

// if(a < b ){
//     console.log('A < B');
// }else{
//     console.log('A > B');
// }

/**
 * Toán tử logic ko trả về boolean mà chỉ trả về kết quả của điều kiện.
 * Toán tử && (and) trả về kết quả của vế phải
 * Nếu khác 6 giá trị null thì lấy vế bên phải. còn nếu gặp null ở đâu thì lấy null ở đó.
 */

/**
 * Toán tử || (or) 
 * Cái nào khác false thì lấy luôn.
 */