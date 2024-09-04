// break and continue in Loop
for (var i = 0; i < 10; i++){
    console.log(i);
    if(i%2 !== 0){
        continue;
    }else if(i>=5){
        break;
    }
    console.log(i);
}