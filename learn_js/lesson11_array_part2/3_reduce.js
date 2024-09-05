var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 300
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 500
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 600
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 0
    },
]

// reduce có thể được dùng trong tính 1 thành phần nào đó trong array
// ví dụ, duyệt mảng courses để tính tổng coin
// Có 2 cách:   
// Cách 1: dùng vòng lặp for of
// var totalCoin = 0;
// for (const value of courses) {
//     totalCoin += value.coin;
// }
// console.log(totalCoin);

// Cách 2: dùng reduce.
var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray){
    // Tạo 1 hàm declaration để reduce sử dụng các tham số truyền vào.
    //accumulator biến lưu trữ ?
    //currenValue: giá trị hiện tại
    //currenIndex: giá trị của vị trí hiện tại.
    //originArray: mảng hiện tại sau khi thay đổi.
    i++;
    var total =  accumulator + currentValue.coin;
    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ (giá hiện tại chưa cộng): ': accumulator,
        'Giá khoá học: ': currentValue.coin,
        'Giá khoá học sau khi cộng: ': total,

    });
    console.log(currentValue);
    return total;
    // trong reduce: return cái gì thì trả về accumulator là cái đó.

}
var totalCoin = courses.reduce(coinHandler, 0);
// Đối số thứ nhất là 1 function là bắt buộc.
// đối số thứ hai là initial: là giá trị khởi tạo ban đầu.
console.log(totalCoin);

// reduce mặc định tự định nghĩa sẵn và truyền tham số khởi tạo ban đầu.
//(nó chạy đi chạy lại hàm mình khởi tạo yêu cầu giá trị trả về).