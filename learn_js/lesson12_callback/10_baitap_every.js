Array.prototype.myEvery = function(cb) {
    var result = true;
    for(var index in this){
        if(this.hasOwnProperty(index)){    
            var kq = cb(this[index], index, this);
            if(!kq){
                result = false;
                break;
            }
        }
    }
    return result;
}


// Expected results

const numbers = [2, 3, 3, 5];

console.log(numbers.myEvery(function (number) {
    return number % 2 !== 0;
})); // Output: true

console.log(numbers.myEvery(function (number, index) {
    return index % 2 === 0;
})); // Output: false

console.log(numbers.myEvery(function (number, index, array) {
    return array.length % 2 === 0;
})); // Output: true


console.log(numbers.length);