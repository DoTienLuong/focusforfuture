
function arrToObj(arr) {
    var result = arr.reduce(function(obj, element, index, array){ // tham số 1: giá trị khởi tạo, tham số 2: phần tử của mảng.
        // console.log(element);   // phần tử duyệt đến. 
        // console.log(index); // vị trí mà phần tử duyệt đến
        obj[element[0]] = element[1];
        return obj;
    },{})
    return result;
}

// Expected results:

const obj1 = arrToObj([
   ['name', 'Son Dang'], 
   ['age', 21], 
   ['address', 'Ha Noi']
])
console.log(obj1)
// Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }

const obj2 = arrToObj([
   ['name', 'Duc Long'], 
   ['age', 18], 
   ['address', 'Ha Noi']
])
console.log(obj2)
// Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }

