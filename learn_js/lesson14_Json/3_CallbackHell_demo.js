// Callback hell: callback lồng callback =))
// Pyramid of doom

// Khi viết callback lồng callback thì sẽ rất nhức đầu,
// -> promise giải quyết nỗi đau của callback đó. 

setTimeout(()=>{
    console.log(1);     //Viec 1;
    setTimeout(()=>{
        console.log(2);     //Viec 2;
        setTimeout(()=>{
            console.log(3);     //Viec 3;
            setTimeout(()=>{
                console.log(4);     //Viec 4;
            },1000);
        },1000);
    },1000);
},1000);
