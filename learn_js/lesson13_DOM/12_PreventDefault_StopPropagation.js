// Dom events

// 1. preventDefault:       ngăn những hoạt động mặc định
// 2. stopPropagation:      ngăn những hoạt động nổi bọt lên các thẻ trên


var aElements = document.links; // lấy tất cả thẻ a.
// document.anchors thì phải đặt name cho thẻ a.

for (var i=0; i< aElements.length; i++){
    aElements[i].onclick = (e)=>{
        console.log(e.target.href);     // hiển thị link của thẻ a mỗi khi click;
        if(!e.target.href.startsWith("https://f8.edu.vn")){
            e.preventDefault;
            // nếu không phải là link f8 thì ko chuyển trang. 
            // ứng dụng trong việc ngăn chặn click link mặc định của các thẻ.
        }
    }
}

var buttonElement = document.querySelector('button').onclick = (e)=>{
    e.stopPropagation();
    console.log('Ngăn chặn click của cái thẻ trên');
}