// For in loop
// For in dùng để lấy các key của đối tượng

var myInfo = {
    name: 'Tiến Lượng',
    age: 21,
    address: 'Biên Hoà, Đồng Nai'
};

// for(var key in myInfo){
//     // console.log(key);               // key đóng vai trò là index
//     // console.log(myInfo[key]);       // array[key] để trích xuất value
//     console.log("Thuộc tính " + key + " có giá trị " + myInfo[key]);
// }

function run(object){
    var array = [];
    for(var key in myInfo){
        array.push("Thuộc tính " + key + " có giá trị " + myInfo[key]);
    }   
    return array;
}

console.log(run({ name: 'Nguyen Van A', age: 16 }));