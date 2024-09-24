// promise? promise giải quyết vấn đề callback hell (trong phiên bản es6)-> dùng để xử lý những thao tác bất đồng bộ, làm cho code cảm thấy dễ đọc, code gọn gàng và dễ hiểu hơn.
// Các trạng thái của promise:
// 1. Pendding: trạng thái chờ (thành công hay thất bại). //sẽ bị rò rỉ bộ nhớ.
// 2. Fulfilled: Chạy thành công.
// 3. Rejected: Chạy thất bại.

var promise = new Promise(          // promise là 1 object contructor      
    // Executor // khi gọi new Promise() thì sẽ gọi Executor Function.
    function(resolve, reject){ 
        // trong function có 2 tham số đều là function
        // resolve: là xử lý thành công thì gọi đến resolve(),
        // reject: là xử lý thất bại thì gọi đến reject().
        resolve("trả về giá trị muốn hiển thị khi thành công.");
        // reject("Có lỗi xảy ra.")
    }
); 

// Cấu trúc promise.
promise 
    .then(function(info){   // thành công (resolve xảy ra)
        console.log('SuccessFully!');
        console.log(info);
        // then sẽ đc gọi khi resolve hoạt động.
    })
    .catch(function(){  // bắt lỗi (reject xảy ra)
        console.log('Failure!');
        // catch sẽ đc gọi khi reject hoạt động.
    })
    .finally(function(){
        console.log('Done!');
        // finally sẽ đc gọi khi 1 trong 2 hoạt động. (cái này luôn hoạt động sau khi 1 trong 2 hoạt động)
    })