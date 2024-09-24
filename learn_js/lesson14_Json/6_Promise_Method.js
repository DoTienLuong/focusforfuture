// promise.resolve     Chắc chắn đúng
// promise.reject      Chắc chắn sai
// promise.all         Duyệt qua tất cả promise rồi mới trả về kết quả 

var promise1 = new Promise(function(resolve){
    setTimeout(function(){
        resolve([1]);
    }, 1000);
})

var promise2 = new Promise(function(resolve){
    setTimeout(function(){
        resolve([2, 3]);
    }, 2000);
})

Promise.all([promise1, promise2])   // Tất cả đều phải xong thì mới show
    .then(function(result){
        // console.log(result);
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
    })
    .catch((error)=>{
        console.log(error); // Chỉ cần 1 thằng error thì sẽ error
    })