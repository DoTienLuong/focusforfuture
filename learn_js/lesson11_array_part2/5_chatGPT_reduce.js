// Thêm phương thức reducefn vào Array.prototype
Array.prototype.reducefn = function(callbackfn, initialValue, index) {
    if (this.length === 0 && initialValue === undefined) {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    var acc = initialValue === undefined ? this[0] : initialValue;
    var startIndex = index === undefined ? 0 : index;
    
    for (let i = startIndex; i < this.length; i++) {
        acc = callbackfn(acc, this[i]);
    }

    return acc;
};

// Callback function
var cb = function callbackfn(accumulator, value) {
    return accumulator * value;
}

// Tạo mảng và sử dụng phương thức reducefn
var arr = [1, 2, 3, 4, 1, 2, 2, 2];
var kq = arr.reducefn(cb, 5, 3);

console.log(kq); // Kết quả sẽ là 160
