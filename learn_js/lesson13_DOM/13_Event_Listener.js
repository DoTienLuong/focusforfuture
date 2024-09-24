// 1.(Dom event) Xử lý nhiều việc khi 1 event xảy ra. 
// 2. Lắng nghe, hủy  bỏ lắng nghe.

var btn = document.getElementById('btn');


// dom event: làm nhiều việc 1 lúc. Đưa nhiều fn vào 1 event.
btn.onclick = ()=>{
    // viec 1:
    console.log('Viec 1');

    // viec 2:
    console.log('Viec 2');

    // viec 3:
    console.log('Viec 3');
}


setTimeout(()=>{
    btn.onclick = ()=>{

    }
}, 3000)
// gán lại bằng function rỗng để hủy bỏ listener;




// event listener (bóc tách event): có thể tách nhiều event cho function, cái nào gọi trc thì chạy trc.
// muốn lắng nghe thì addEventListener;
btn.addEventListener('click', function(e){
    console.log('Event 1');
})
btn.addEventListener('click', function(e){
    console.log('Event 2');
})
btn.addEventListener('click', function(e){
    console.log('Event 3');
})

// muốn xóa bỏ lắng nghe thì removeEventListener;
setTimeout(()=>{
    btn.removeEventListener('click', viec1);
}, 3000)