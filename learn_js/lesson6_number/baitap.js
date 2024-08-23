function isNumber(value){
    return typeof value == 'number' && !isNaN(value) ? true : false;
}

//isNaN (is not a number) tức kiểm tra 
//nếu không phải là số thì trả về true, còn nếu là số thì trả về false



// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false


var value2 = 2;
console.log(isNaN('asdasd'));   // Những hàm có kiểu chuổi thì khi gán với isNaN thì = true.
console.log(isNaN(123123))      // Những hàm có kiểu số thì gán với isNaN thì = false;
console.log(!isNaN('asdasd'));  // Những hàm có kiểu chuổi thì khi gán với !isNaN thì bằng false;
console.log(!isNaN(12312));     // Những hàm có kiểu số khi gán với !isNaN thì = true.


