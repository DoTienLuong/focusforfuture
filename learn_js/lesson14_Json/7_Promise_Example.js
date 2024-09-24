var users = [
    {
        id: 1,
        name: "Tien Luong",
    },
    {
        id: 2,
        name: "Trong Huy",
    },
    {
        id: 3,
        name: "Duong Khang",
    },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: "Do Tien Luong sn 14-02",
    },
    {
        id: 2,
        user_id: 2,
        content: "Ko biet sn Huy ngay bao nhieu",
    },
    {
        id: 1,
        user_id: 3,
        content: "Khang la sinh vien den tu ben tre",
    },
]

// bước 1: lấy comment:
// bước 2: từ comment, lấy ra user_id
// bước 3: từ user_id, lấy ra user tương ứng

function getUserByIds(UserIds){
    return new Promise((resolve, reject)=>{
        var result = users.filter((user)=>{
            return UserIds.includes(user.id);
        });
        setTimeout(()=>{
            resolve(result);
        }, 1000);
    })
}
getUserByIds([1, 2, 3])
    .then((users)=>{
        console.log(users);
    })

function getComments(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(comments);
        },1000)
    })
}
getComments()           // getComments là đã hiển thị một array comment từ resolve rồi.
    .then((comments)=>{ // truyền array đó vào .then để chạy tiếp
        // console.log(comments);
        var userIds = comments.map((comment)=>{
            return comment.user_id;
        })
        return getUserByIds(userIds)
            .then((users)=>{
                return{
                    users: users,
                    comments: comments,
                };
            })
    })
    .then((data)=>{
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach((comment)=>{
            var user = data.users.find((user)=>{
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        })
        console.log(html); 
        commentBlock.innerHTML = html;
    })