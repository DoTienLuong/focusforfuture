// Dom events: sự kiện xảy ra từ hành vi của chúng ta (qua chuột, phím)

// 1. Attribute events: thêm attribute vào element. (inline bên html)
// 2. Assign event using the element: sử dụng element node để gán sự kiện vào dom. (tạo biến để gọi và sử dụng biến để add event)
// thêm on vào trước các event.

var eleButton = document.querySelector('button');
eleButton.onclick = ()=>{
    eleButton.style.color = "#fff";
}



// Dom event:
// 1. Input / select
// 2. Key up / down

var inputElement = document.querySelector('input[type="text"]');

var inputvalue;
inputElement.oninput = e =>{
    // console.log(e.target.value);
    inputvalue = e.target.value;
}
// đối với input
// onchange: khi nào thay đổi thì mới lấy.
// oninput: cứ gõ cái gì là lấy cái đó.

// đối với checkbox
// onchange: lấy sự thay đổi.
// để kiểm tra đang check hay ko check thì dùng e.target.checked

// đối với select thì cũng dùng e.target.value để lấy nội dung của các select.



// 2. key up / down: sự kiện bàn phím (keyboard event)
inputElement.onkeyup((e)=>{
    // nhấc phím lên là thực hiện luôn
    console.log(e.which);
    switch(e.which){
        case 27: 
            console.log('Exit');
            break;
    }
})
inputElement.onkeydown(()=>{
    // ấn phím tiếp theo mới thực hiện
})

// document cũng có thể lắng nghe event:
document.onkeydown = (e)=>{
    switch(e.which){
        case 27: 
            console.log('Exit');
            break;
        case 13: 
            console.log("xem noi dung chat");
            break;
    }
}

// keydown là bấm xuống, phải bấm phím tiếp theo mới hiện phím trc
// keyup là nhấc lên cái hiện luôn.
// keypress là nhấn cái nhận luôn.