// Callback phần 2:


// 1. Là hàm
// 2. Truyền qua đối số.
// 3. Được gọi lại (trong hàm nhận đối số)

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];
// map mậc định:
// var htmls = courses.map(function(course){
//     return `<H2> ${course} </H2>\n`;
// });
// console.log(htmls.join(''));

// map tự khởi tạo:
Array.prototype.map2 = function(callBack){
    // console.log(this)
    var output = [], arrayLength = this.length;
    for(var i = 0; i < arrayLength; i++){
        var result = callBack(this[i], i);
        output.push(result);
    }
    return output; 
}
var htmls = courses.map2(function(course, index){
    return `index: ${index}, <H2> ${course} </H2>\n`;
});
console.log(htmls.join(''));
