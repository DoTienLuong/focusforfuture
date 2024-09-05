// Thêm phương thức reducefn vào Array.prototype
Array.prototype.reducefn = function(callbackfn, initialValue) {
    if (this.length === 0 && initialValue === undefined) {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    var acc = initialValue === undefined ? this[0] : initialValue;
    var startIndex = initialValue === undefined ? 1 : 0;
    
    for (let i = startIndex; i < this.length; i++) {
        acc = callbackfn(acc, this[i]);
    }

    return acc;
};

// Callback function
var cb = function callbackfn(accumulator, value) {
    return accumulator + value;
}

// Tạo mảng và sử dụng phương thức reducefn
var arr = [11, 12, 15];
var kq = arr.reducefn(cb);
console.log(kq); // Kết quả sẽ là 38
