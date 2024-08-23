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

