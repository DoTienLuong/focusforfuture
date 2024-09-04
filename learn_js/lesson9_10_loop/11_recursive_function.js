function loop(start, end, cb){
    if(start < end){
        cb(start);
        return loop(start + 1, end, cb);
    }
}

var array = ['Javascript', 'PHP', 'Ruby'];

loop(0, array.length, function(index){
    console.log(array[index]);
});

function giaiThua(number){
    if(number > 0){
        return number * giaiThua(number-1);
    }
    return 1;
}
console.log(giaiThua(6));