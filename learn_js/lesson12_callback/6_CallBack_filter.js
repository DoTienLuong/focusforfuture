const arrNumber = [1, 2, 3, 4];

var arr = arrNumber.filter(function(element, index, array){
    return element > 2;
})

console.log(arr);

Array.prototype.myFilter = function(callBack){
    var result = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var kq = callBack(this[index], index, this)
            // console.log(kq);
            if(kq){
                result.push(this[index]);
            }
        }
    }
    return result;  // Nhớ là 1 prototype đc tạo ra phải luôn có return.
}
function callBack(element, index, array){
    // console.log(element);
    return element > 2;  // So sánh phần tử thứ index với giá trị, nếu đúng return true, ngược lại return false.
}

var test = arrNumber.myFilter(callBack);
console.log(test);