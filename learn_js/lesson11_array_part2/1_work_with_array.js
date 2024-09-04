/**
 *  Array methods:
 *      forEach()
 *      every()
 *      some() 
 *      find()
 *      filter()
 *      map()
 *      reduce()
 */

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

//1: forEach(): duyệt qua các phần tử của mảng.
console.log("\nFor Each là vòng lặp duyệt qua các phần tử của mảng.");
courses.forEach(function(course, index){
    console.log(index, course);
})

//2: every(): duyệt qua các phần tử trong mảng, so sánh với điều kiện và trả kq boolean (chỉ cần có 1 sai là return false)
console.log("\nEvery là vòng lặp duyệt qua các phần tử của mảng, so sánh với điều kiện và trả kq boolean (chỉ cần có 1 sai là return false)");
var isFree = courses.every(function(course, index){
    console.log( 'Sai tại vị trí '+ index);
    return course.coin === 0;
})
console.log(isFree);

//3: some(): duyệt qua các phần tử trong mảng, so sánh với điều kiện và trả kq boolean  (chỉ cần có 1 đúng là return true)
console.log("\nSome là vòng lặp duyệt qua các phần tử của mảng, so sánh với điều kiện và trả kq boolean  (chỉ cần có 1 đúng là return true)");
var isFree = courses.some(function(course, index){
    return course.coin === 0;
})
console.log(isFree);

//4: find(): duyệt qua các phần tử trong mảng, so sánh với điều kiện và trả kq là ekement
console.log("\nFind là vòng lặp duyệt qua các phần tử của mảng, so sánh với điều kiện và trả element  (chỉ return 1 kq)");
var findCourse = courses.find(function(course, index){
    return course.name === 'Ruby';
})
console.log(findCourse);

//5: filter(): duyệt qua các phần tử trong mảng, so sánh với điều kiện và trả kq là ekement
console.log("\nFilter là vòng lặp duyệt qua các phần tử của mảng, so sánh với điều kiện và trả element  (return nhiều kq)");
var findCourse = courses.filter(function(course, index){
    return course.name === 'Ruby';
})
console.log(findCourse);
console.log("\n\n\n\n\n");



// Bài tập:
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
function getMostFavoriteSport(sports){
    var result = sports.filter(function(result){
        return result.like > 5;
    })
    return result;
}


// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]