function arrToObj(arr){
    var object = arr.reduce(function(obj, element){ // 1. xác định mục tiêu ban đầu là tạo ra 1 object, truyền vào 1 object. element là biến lưu current value.
        obj[element[0]] = element[1];               
        // 3. obj thêm 1 thuộc tính = cách obj[thuộc tính (key)], mà thuộc tính lấy từ element, mà element là 1 mảng nên phải lấy phần tử mảng bẳng cách element[index];
        // Sau đó gán giá trị cho thuộc tính (key) = element[index];
        return obj;                                 // 4. return obj và chạy lại callback liên tục cho đến khi hết phần tử.
    }, {})                                          // 2. Khởi tạo obj ban đầu là 1 object rỗng.
    return object;
}
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

const course = [
    {
        name: 'HTML, CSS'
    },
    {
        name: 'Responsive web design'
    },
    {
        name: 'ReactJS'
    }
]
const code = course.reduce(function(obj, element){
    obj[element.name] = element;
    return obj;
},{});
console.log(code);
