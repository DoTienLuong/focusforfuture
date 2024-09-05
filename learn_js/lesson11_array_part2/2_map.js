// map: trả về 1 mảng mới và cập nhật thêm các thuộc tính mà mình muốn.

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

function copyCourses(ele, index){
    return{
        id: ele.id,
        name: `Khoá học: ${ele.name}`,
        coin: `Giá: ${ele.coin}/3 tháng`,
        index: index
    };
}
var newCourses = courses.map(copyCourses);
console.log(newCourses);
