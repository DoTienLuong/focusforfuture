/**
 * Object trong Javascript
 * 
 */

var myInfo = {
    name: 'Tiến Lượng',
    age: 21,
    address: 'Biên Hòa, Đồng Nai',
    school: 'IUH',
    abs: 'asdasd'
};

myInfo.email = 'dotienluong1402@gmail.com';                 // Cú pháp thêm key, value cho object.
myInfo['Sở thích'] = [' Đá banh', ' Lái xe', ' Đi phượt'];     // thêm key, value đối với những key sai quy tắc.

console.log(myInfo);
console.log('Name: ' + myInfo.name);

var soThich = myInfo['Sở thích'];       // Tạo biến lưu value sở thích.
console.log('Sở thích: ' +soThich);    

var emailKey = 'email';                 // Tạo ra key theo biến.
var hobby = 'Sở thích';
var enyInfo = {
    name: 'Phạm Thị Kim Cương',
    age: 20,
    address: 'phường Ninh Thạnh, thành phố Tây Ninh, tỉnh Tây Ninh',
    [emailKey]: 'kimcuong100804@gmail.com', // nếu bỏ ngoặc vuông thì key là emailKey chứ ko phải là biến.
    [hobby]: ['Ăn mì cay', 'Ngắm hoàng hôn', 'Nơi mát mẻ', 'Đường có nhiều cây']

}
console.log(enyInfo);

delete myInfo.abs;  // delete key value abs.
console.log(myInfo);



var testFN = {
    name: 'chú bé Lượng',
    age: 21,
    address: 'Biên Hoà, Đồng Nai',
    [emailKey]: 'fastdominicracing@gmail.com',
    getName: function(){
        return this.name;
    }
};
testFN[hobby] = 'Lái xe ô tô',
console.log(testFN);    
console.log(testFN.getName + ' có kiểu dữ liệu: ' +typeof testFN.getName);
console.log(testFN.getName);
console.log(testFN.getName() + ' có kiểu dữ liệu: ' +typeof testFN.getName());





// Nếu thêm key: value với key cụ thể thì myFN.key = '...'
// Nếu thêm key dạng biến thì myFN[variable] = '...'
// 
// Trong var Object
// Function --> phương thức / method
// Others   --> Thuộc tính  / property (attributes in Class)



//Object constructor:
//decorate function
function User(firstName, lastName, avatar){
    this.firstName  = firstName;
    this.lastName   = lastName;
    this.avatar     = avatar;
}
//express function
var User2 = function(firstName, lastName, avatar){
    this.firstName  = firstName;
    this.lastName   = lastName;
    this.avatar     = avatar;
}

var author      = new User('Tiến Lượng', 'Đỗ', 'Avatar.jpg');
var employee    = new User('Trọng Huy', 'Trần', 'Avatar.jpg');
console.log(author);
console.log(employee);
console.log(author.constructor)     // Hiển thị mô tả của Object
console.log(author.constructor === User)    // Kiểm tra kiểu dữ liệu có khớp không.

author.hobby = 'Drive Car';             // Thêm property hobby cho Object author;
var interest= 'Sở thích';               // Tạo biến interest gán giá trị 'Sở thích'
employee[interest] = 'Nhảy hip hop';    // Thêm property theo biến interest cho Object employee
console.log(author);
console.log(author.hobby);
console.log(employee);
console.log(employee['Sở thích']);
// console.log(employee.$('Nhảy hip hop'));

/**
 * Object prototype - basic
 * 
 * 1. Prototype là gì?
 * 2. Sử dụng khi nào?
 */

function User3(firstName, lastName, avatar){
    this.firstName  = firstName;
    this.lastName   = lastName;
    this.avatar     = avatar;
    this.getName    = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
var acc3 = new User3('Lượng', 'Đỗ', 'Lượngxmen1402');
console.log(acc3);
// Object prototype có thể định nghĩa thêm thuộc tính từ bên ngoài mà ko cần can thiệp vào bên trong object.
User3.prototype.classname = 'F8';
User3.prototype.getClassName = function(){
    return this.classname;
}
// Mỗi khi update prototype là áp dụng cho tất cả các object đã được khởi tạo từ trước đó
// Thuộc tính chỉ xem đc trong tab prototype
console.log(acc3.classname);
console.log(acc3.getClassName());

