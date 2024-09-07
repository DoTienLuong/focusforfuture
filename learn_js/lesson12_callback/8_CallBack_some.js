const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
function callBack(element, index, array){
    return element > 5; // Toán tử so sánh -> return true or false.
}
var arr = numbers.some(callBack);
console.log(arr);

Array.prototype.mySome = function(callBack){
    var result = false;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var kq = callBack(this[index], index, this);
            // console.log(kq);
            if(kq){             // nếu kq thoả điều kiện
                result = true;    // Chỉ cần gặp đúng phần tử thoả điều kiện là return true.
                break;
            }
        }
    }
    return result;
}
var test = numbers.mySome(callBack);
console.log(test);
var test2 = courses.mySome(function(element, index, array){
    return element.coin > 700;
})
console.log(test2);