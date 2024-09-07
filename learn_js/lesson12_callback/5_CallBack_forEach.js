Array.prototype.myForEach = function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            // console.log(index , this.hasOwnProperty(index));
            // hasOwnProperty là kiểm tra các element có cùng nằm trong mục cha không, nếu có thì trả về true, cái nào ko cùng thì trả về false.
            callback(this[index], index, this);
        }
    }
}

var courses = [
    'Javascript', 
    'WWW', 
    'CSS', 
    'HTML'
]
courses.myForEach(function(courses, index, array){
    console.log(courses, index, array);
});
// console.log(courses);
// console.log(Array.prototype);

// Khi định nghĩa Array.prototype thì phương thức được thêm vào sẽ đc add vô prototype của array.
// Nhưng chỉ hiển thị trong chỉ mục prototype chứ không hiện trong element của array. Nên số lượng phần tử của array vẫn bằng số lượng phần tử element trong array.
// Và vòng lặp không chỉ chạy qua các element mà còn chạy qua các prototype nằm trong array mà chúng ta đã định nghĩa.

var test = new Array(100);
test.push('Đỗ Tiến Lượng', 'Phạm Thị Kim Cương')
test.myForEach(function(courses, index, array){
    console.log(courses, index, array);
});