function logger(log, isAlert){
    if(typeof log === 'undefined'){
        log = 'Giá trị mặc định';
    }
    console.log(log);
}

logger(undefined);



// Default_Parameter (không bắt buộc phải truyền vào thì viết cái này cho lẹ.)
function logg(log, type = 'log'){
    console[type](log);
}
logg("Hello World", 'warn');