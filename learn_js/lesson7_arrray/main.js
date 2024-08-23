/**
 * Trong mảng chúng ta có thể thêm bất kể kiểu dữ liẹu nào ta muốn,
 * bao gồm cả array, object, 
 */
var languages = [
    'Javascript',
    'PHP',
    'C',
    'Html0',
    null, 
    undefined,
    function(){
    },
    {},
    123
];
console.log('array 1: ' + languages);
console.log('Loại array: ' + typeof(languages));
console.log('Kiểm tra array: ' + Array.isArray(languages));  // Để kiểm tra có phải mảng hay không thì dùng hàm isArray.

var languages2 = new Array(
    'Javascript',
    'PHP',
    'C',
    'Html0',
    null, 
    undefined,
    function(){
    },
    {},
    123
);

console.log('Array 2: '+ languages2)

// Truy xuất mảng
// - Độ dài: 
console.log('Độ dài Array 1: ' + languages.length);
// - Lấy phần tử trong mảng:
console.log('Giá trị tại phần tử thứ 4 của Array 2: ' + languages2[4]);

/** Làm việc mới array 
 * 1. To String
 * 2. Join
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Splicing
 * 8. Concat
 * 9. Slicingch
*/

var languages3 = [
    'Javascript',
    'PHP',
    'Ruby'
];

//1. toString: liệt kê các phần tử trong mảng thành một đoạn ký tự
console.log(languages3.toString()); // Nhớ thêm () cho các hàm, phương thức.

//2. join: liên kết các phần tử trong mảng
console.log(languages3.join(''));   // Dùng join để Liên kết giữa các phần tử trong mảng với ký tự mong muốn đặt trong ('');
console.log(languages3.join('; '));

//3. pop: Xoá đi element cuối cùng và trả về element đó.
console.log(languages3.pop());      // xoá phần tử cuối mảng và trả về element cuối.
console.log(languages3);
console.log(languages3.pop());
console.log(languages3);
console.log(languages3.pop());
console.log(languages3);            // Khi xoá hết các phần tử thì in ra mảng rỗng.

//4. push: Thêm element vào cuối mảng:
console.log(languages3.push('Dark', 'Java'));
console.log(languages3.push('Dark', 'Java'));
console.log(languages3);

//5. shift: Xoá phần tử đầu tiên:
console.log(languages3.shift());
console.log(languages3);
console.log(languages3.shift());
console.log(languages3)

//6. unshift: Thêm phần tử vào đầu mảng.
languages3.unshift('Đỗ Tiến Lượng', 'Đang học');
console.log(languages3);

//7. splice: xoá phần tử trong mảng theo vị trí.
languages3.splice(1, 3);    // Vị trí xoá từ 1, số lượng xoá 3;
console.log(languages3);

languages3.splice(0,0,'Lượng', 'Thích Code', 'Ra sản phẩm');
console.log(languages3);
// vị trí xoá (0) là phần tử đầu tiên. Số lượng xoá = 0;
// Thêm các element vào đầu danh sách và giữ nguyên element cũ và xếp ở sau.


//8. concat: nối hai mảng với nhau
languages.concat(languages3);
console.log(languages);
console.log(languages.concat(languages3));
console.log(languages);
// hàm concat chỉ kết nối với nhau khi nằm trong console.log

//9. slice: Lấy ra các phần tử trong mảng hoặc copy các phần tử trong mảng.
console.log(languages);
languages.slice(1,2);
console.log(languages.slice(1,2));  // Vị trí bắt đầu cắt là 1, kết thúc là 2 (dừng trước 2);
// Cả concat và slice đều phải thực hiện trong console.log()










var any = [
    'Đỗ Tiến Lượng',
    '2003'
]

var eny = new Array(
    'Phạm Thị Kim Cương',
    '2004'
);

var love = any.concat(eny); // Tạo array để gán 2 array.
console.log(love); 

any.push('love');   // Thêm phần tử vào cuối mảng any.
eny.push('rất nhiều.');
console.log(any);
// eny.pop();          // xóa phần tử cuối (2004);
any.splice(1,1);    // xóa phần tử vị trí thứ 1, xóa 1 phần tử.  
eny.splice(1,1);    // xóa phần tử vị trí thứ 1, xóa 1 phần tử.  
console.log(any);
console.log(eny);

any.unshift('hôm nay', 'Anh');  // thêm 2 phần tử vào mảng any;
eny.unshift('hôm nay', 'em');   // thêm 2 phần tử vào mảng eny;
console.log(any);
console.log(eny);

any.splice(0,1);    
eny.splice(0,1);
console.log(any);
console.log(eny);


love = any.concat(eny);
console.log(love.join(' '));


