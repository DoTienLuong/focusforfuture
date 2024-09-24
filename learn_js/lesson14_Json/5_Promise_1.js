function sleep(ms){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, ms);    // Sau ms giây, resolve sẽ chạy (sau ms giây, .then đầu tiên sẽ hoạt động.)
    })
}

sleep(5000) 
    .then(function(){
        console.log(1);
        return sleep(1000); //lại chạy 1 promise để kích hoạt, vì kq là resolve nên nó sẽ chạy .then 2
    })
    // .then thứ 2 sẽ hoạt động sau khi .then 1 success
    // 
    .then(function(){
        console.log(2);
        return sleep(1000)
    })
    .then(function(){
        console.log(3);
        return sleep(1000)
    })
    .then(function(){
        console.log(4);
        return sleep(1000)
    })
    .catch()
    .finally()