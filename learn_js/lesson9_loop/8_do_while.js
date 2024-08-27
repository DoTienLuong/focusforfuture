// Do while
var i = 0;
do{
    // code:
    i++;
    console.log(i);
}while(i<10)



var isSuccess = false;

do{
    i++;
    console.log("Nạp thẻ lần "+i);

    //thành công:
    if(true){
        isSuccess = true;
    }
}while(!isSuccess && i<=3);