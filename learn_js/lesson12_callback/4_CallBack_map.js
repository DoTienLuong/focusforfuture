Array.prototype.myMap = function(cb) {                  // Khởi tạo hàm myMap cho Array. (tức là tất cả array đều xài đc myMap());
    var output = [], arrayLength = this.length;         // Tạo array output lưu trữ kết quả.
    for(var i = 0; i < arrayLength; i++){               // 
        output.push(cb(this[i], i));                    // thêm phần tử bằng cách dùng hàm push(); dùng callback để truyền đối số.
    }                                                   // hàm call back return cái gì thì push cái đó vô array.
    return output;
}

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})) // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})) // Output: [0, 2, 6]


