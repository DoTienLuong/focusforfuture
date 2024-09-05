//Flat - "làm phẳng" mảng từ Depth array - "mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function(newArray, element){
    var i = 0;
    return newArray.concat(element);
    // không thể dùng push vì reduce lặp lại cần tạo ra mảng mới và thêm những gì mới vào những gì đang có.
    // còn push chỉ thêm những cái mới vào cái đang có, lặp lại thì cũng k thây đổi đc mảng đang có ban đầu.
}, [])
console.log(flatArray);

