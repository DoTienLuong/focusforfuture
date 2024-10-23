Array.prototype.myMap = function(cb) {                  // Khởi tạo hàm myMap cho Array. (tức là tất cả array đều xài đc myMap());
    var output = [], arrayLength = this.length;         // Tạo array output lưu trữ kết quả.
    for(var i = 0; i < arrayLength; i++){               // 
        output.push(cb(this[i], i, this));              // thêm phần tử bằng cách dùng hàm push(); dùng callback để truyền đối số. Đến bước này thì myMap mới sử dụng cb được truyền vào.
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
console.log(numbers.myMap(function(number, index, array){
    return `${number}, ${index}, ${array}`;
}))

// ban đầu, numbers sẽ gọi hàm myMap.
/**
Ban đầu, numbers sẽ gọi hàm myMap.
Hàm myMap sẽ truyền đối số là 1 hàm. (hàm này lại truyền 1 đối số và return theo giá trị mà hàm này muốn.)
Hàm myMap ban đầu vẫn thực hiện bình thường các tiến trình. 
Hàm myMap tạo ra 1 mảng output là rỗng. Sau đó tạo 1 arrayLength = this.length tức là mảng.length.
Sau đó push các phần tử vào output(array). 
Các phần tử đc push vào sẽ đc lấy từ hàm cb được định nghĩa là đối số của hàm myMap. 
mà hàm cb sẽ đc truyền 2 đối số là phần tử hiện tại this[i] và vị trí của phần tử đang duyệt i.
mà hàm cb đc định nghĩa logic tuỳ chọn. Vd định nghĩa hàm cb đc truyền 1 đối số là (number) và return number*2, thì giá trị đc push vào sẽ là kết quả của number*2.

Có thể hiểu là khi gọi myMap sẽ truyền vào 1 hàm, mà hàm này trả về cái gì thì sẽ là giá trị đc push.




Cập nhật cách hiểu mới:
Hàm myMap sẽ truyền vào 1 hàm là cb.
Trong quá trình hàm myMap chạy, hàm myMap sẽ tạo ra 1 mảng rỗng. (output)
mảng output muốn thêm giá trị lấy từ hàm cb. Lúc này hàm cb đc truyền 3 đối số là giá trị mảng vị trí i, vị trí của i và thông tin toàn bộ mảng.
Nhìn muốn xem hàm cb trả về gì thì nhìn vào hàm định nghĩa mình tạo ra. Mình định nghĩa các đối số đc xử lý như nào thì kết quả return sẽ đc push vào array output trong hàm myMap.
 */