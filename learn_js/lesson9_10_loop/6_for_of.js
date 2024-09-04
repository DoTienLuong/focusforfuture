// For or loop: Dùng để lấy các value của array.

var myInfo = [
    'Tiến Lượng',
    21,
    'Biên Hoà, Đồng Nai'
];

for(var value of myInfo){
    console.log(value);
}

// Đối với object:
var myObject = {
    name: 'Lượng',
    age: 21
};
console.log(Object.keys(myObject));     // Lấy ra các keys
console.log(Object.values(myObject));   // Lấy ra values

for(var value of (Object.keys(myObject))){
    console.log(value);
}   // lấy key with for of


for(var value of (Object.values(myObject))){
    console.log(value);
}   // Lấy value with for of