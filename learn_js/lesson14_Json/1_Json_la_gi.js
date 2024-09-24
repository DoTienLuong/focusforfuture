// Json là kiểu định dạng dữ liệu chứ ko phải là kiểu dữ liệu.

// 1. Json là một định dạng dữ liệu dạng chuỗi, đặt trong cặp ngoặc nháy kép "";
// 2. JavaScript Object Notation (Json).
// 3. Json: Number, String, Boolean, Null, Array, Object. 

var a = '1';
console.log(JSON.parse(a)) // ép kiểu sang Json.
// Phương thức JSON.parse nhận vào 1 chuỗi JSON và chuyển hóa nó thành dạng dữ liệu gốc.



var object = {
    name: 'Son Dang',
    age: 18
}
var jsonString = JSON.stringify(object)
// Phương thức JSON.stringify dùng để chuyển dạng dữ liệu gốc thành dạng JSON


