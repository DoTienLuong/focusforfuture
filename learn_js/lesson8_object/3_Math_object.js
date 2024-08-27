/** 
 * 
 * 
 * Math object:
 * 
 * Math.PI
 * Math.round()
 * Math.abs()
 * Math.ceil()
 * Math.floor()
 * Math.random()
 * Math.min()
 * Math.max()
 */

console.log(Math.PI);       //Trả về số PI

console.log(Math.round(1.3));   // Làm tròn theo quy tắc 0.5

console.log(Math.abs(-4));  // Giá trị tuyệt đối của -4 = 4;

console.log(Math.ceil(4.11));   // Làm tròn lên 

console.log(Math.floor(4.1));   // Làm tròn xuống

console.log(Math.random());     // Tạo 1 số random từ 0.1-> 0.999

var random = Math.floor(Math.random()*5);  // Tạo 1 số random 0 -> 4
var bonus = [ 
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];
console.log(bonus[random]);

// Khi làm game, giảm tỉ lệ random, ví dụ 20%

var randomNRO = Math.floor(Math.random()*100);  //  100% 
if(!randomNRO <= 20){
    console.log("Chúc con may mắn lần sau! " + randomNRO);
}else{
    console.log("Chúc mừng con nhé!")
}