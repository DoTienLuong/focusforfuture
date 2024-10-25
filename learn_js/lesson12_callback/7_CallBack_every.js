const numbers = [6, 7, 8, 9, 10, 1];

function callBack(element, index, array){
    return element > 5; // Toán tử so sánh -> return true or false.
}
var arr = numbers.every(callBack);
console.log(arr);

Array.prototype.myEvery = function(callBack){
    var result = true;
    for(var index in this){
        var kq = callBack(this[index], index, this);
        // console.log(kq);
        if(kq == false){             // nếu kq thoả điều kiện
            result = false;   // Chỉ cần thoả điều kiện 1 lần là return false.
        }
    }
    return result;
}
var test = numbers.myEvery(callBack);
console.log(test);