// 1. Element
// 2. Attribute
// 3. Text

//innerHTML, outerHTML.

// innerHTML: lấy hết tất cả nội dung trong element mà chúng ta query tới.
// -> ghi đè nội dung bên trong. HTML
var boxElement = document.querySelector('.box');
boxElement.innerHTML = '<h1 titile = "Heading"> New Heading </h1>'
// inner có thể giúp thêm đc element, thêm dc textNode, thêm đc Attribute.
// thêm nội dung vào HTML
// ứng dụng: web site lăn chuột tới đầu thì hiển thị (load inner) tới đó.

console.log(document.innerHTML);

// outerHTML: lấy cả element mà query tới.
// -> ghi đè cả element mà query.
boxElement.outerHTML = '<span> TEST </span>'


// Bài tập:
function render(html) {
    var change = document.querySelector('ul');
    change.innerHTML = html;
}

// render(`
//     <li>Khóa học HTML</li>
//     <li>Khóa học JS</li>
//     <li>Khóa học PHP</li>
// `)


// Bài tập 2:
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {

    var change = document.querySelector('.courses-list');
    var array = courses.map(function(element, index){
        return `<li> ${element} </li>`
    });
    array.join('\n');
    change.innerHTML = array;
}

// render(courses)

