var array = ['Java', 'HTML','CSS'];

// Destructuring: phân rã các phần tử 
// Lấy phần tử theo kiểu truyền biến để thay cho phần tử của mảng.
var [a, ...rest] = array;
console.log(a)

// rest: Lấy ra phần còn lại: Đặt tên biến lưu những phần tử còn lại bằng cách đặt 3 dấu chấm trước biến.
console.log(rest);



// Sử dụng với OBject:
var Course = {
    name: 'Javascript',
    price: 1000,
    image: 'Image-address',
    children:{
        name: 'ReactJS'
    }
}
var {name: parentName, description = 'default description', children:{name: childrenName},...newObject} = Course;
// Đổi tên cho name mặc định và tên trong children.
console.log(childrenName);

// xài rest với Object:
console.log(newObject) 

// tạo description: nếu như ko có trong object thì mình tạo bằng cách gán dấu = ''. 
// Nếu giá trị tồn tại thì hiển thị giá trị, nếu không thì hiển thị giá trị mình gán ban đầu.
console.log(description)


// toán tử ... còn đc gọi là toán tử rest. 
function logger(...params){
    console.log(params) // khi sử dụng rest thì giá trị trả về là 1 array.
}
console.log(logger(1,2,3,4,5,6,7,8));


const { x = 'default', b, ...thieu } = {b: 'val1', c: 'val2', d: 'val3'};

console.log(x, b, thieu); // Output: ?
// output: 'default', 'val1', {c: 'val2', d: 'val3'}
// rest sẽ lưu tất cả các giá trị bao gồm cả biến vào {} nếu như chưa đc định nghĩa.
