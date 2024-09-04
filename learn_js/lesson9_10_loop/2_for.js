// For Loop
var sum = 0
for( var i = 0; i<=5; i++){
    console.log("Đây là giá trị thứ " + i);
    sum +=i;
    console.log("Giá trị tổng của " + i + " chữ số = " + sum);
};

function getRandNumbers(min, max, length){
    var value = [];
    for(var i = 0; i< length; i++){
        value[i] = Math.floor(Math.random() * (max-min) + min);
    }
    return value;
}

var test = getRandNumbers(10,100, 5);
console.log(test)

