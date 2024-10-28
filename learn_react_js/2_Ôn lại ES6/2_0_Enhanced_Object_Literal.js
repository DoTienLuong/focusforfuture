// Enhanced Object Literal:

// 1. Định nghĩa key value cho Object.
var ten = 'Lượng';
var tuoi= 21;

const info = {
    ten,
    tuoi
}
console.log(info)

// 2. Định nghĩa method cho Object.
const info2 = {
    ten,
    tuoi,
    getName(){                  // key là getName, định nghĩa luôn là function.
        return ten;
    },
    getTuoi: function(){        // key là getTuoi, value là 1 function.
        return tuoi;
    }
}
console.log(info2);         

// 3. Định nghĩa key cho object dưới dạng biến

var fieldName = 'name';
var fieldAge = 'tuoi';

const info3 = {
    [fieldName]: "Lượng",
    [fieldAge]: 21
}   
console.log(info3)