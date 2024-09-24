// Tính chất của promise, giúp giải quyết vấn đề khi sử dụng callback hell
// -> Callback hell thì viết code càng ngày càng đi vô trong. 
// -> promise thì viết song song, gọn hơn và dễ hiểu hơn.

var promise = new Promise(          // promise là 1 object contructor      
    // Executor // khi gọi new Promise() thì sẽ gọi Executor Function.
    function(resolve, reject){ 
        // trong function có 2 tham số đều là function
        // resolve: là xử lý thành công thì gọi đến resolve(),
        // reject: là xử lý thất bại thì gọi đến reject().
        resolve();
    }
); 

promise 
    .then(function(){  
        return 1;
    })
    .then(function(value){  
        console.log(value);
        return 2;
    })
    .then(function(){  
        console.log(value);
        return 3;
    })
    .then(function(value){  
        console.log(value);
    })
    // Hàm sau cần value của hàm trước để thực thi.
    // Nếu ko return thì hiển thị undefined.
    // Nếu ko return 1 promise thì chạy tiếp .then ở dưới.
    // Nếu return là 1 promise thì nó sẽ chờ cái promise chạy xong rồi mới chạy tiếp.

    .catch(function(){ 
        console.log('Failure!');
    })
    .finally(function(){
        console.log('Done!');
    })

