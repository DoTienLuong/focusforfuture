// Hiểu sâu thêm về Front-End vs Back-End

// Front-End: Xây dựng giao diện người dùng
// UI: User Interface: Giao diện người dùng
// API (URL): Application programing interface (Cổng giao tiếp giữa các phần mềm)

// Back-End: Xây dựng logic xử lý + cơ sở dữ liệu

// Backend -> API -> Fetch -> JSON
// JSON.parse -> Javascript types.
// -> Render ra giao diện với HTML.




// fetch() // dựa trên nền promise. 
// truyền url vào fetch để hiện data. lấy data từ api
// data từ fetch đa số là json.

/**
 * JSON Server: API Server (Fake)
 * CRUD
 *  - Create: Tạo mới -> POST
 *  - Read:   Lấy dữ liệu -> GET
 *  - Update: Chỉnh sửa -> PUT / PATCH
 *  - Delete: Xoá -> DELETE
 */



var postApi = 'http://localhost:3000/0';
fetch(postApi)
    .then(function(list){
        return list.json();
    })
    .then(function(posts){
        console.log(posts);
    })
    .catch(function(err){
        console.log(err);
    })  