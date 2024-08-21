/**
 * Kiểu dữ liệu chuỗi.
 * Nên dùng cách nào.
 * 
 */
var firstName = 'Luong';
var lastName = 'Do';
console.log(`Toi la: ${firstName} ${lastName}`);
/** Làm việc với chuỗi
 * Keyword: Javascript methods
 * 
 * 1. Length
 * 2. Find index
 * 3. Cut String
 * 4. Replace
 * 5. Convert to upper case
 * 6. Convert to lower case
 * 7. Trim
 */
var myString = 'Hom nay toi se hoc JS JS JS thanh cong voi F8';
// 1. Length
console.log(myString.length);

// 2. Find index:
console.log(myString.indexOf('toi'));
console.log(myString.indexOf('JS', 16)); // tim JS bat dau tu vi tri 16;
console.log(myString.lastIndexOf('JS'));
console.log(myString.search('JS'));

// 3. Cut String.
console.log(myString.slice(14, 19));        // Cắt từ ký tự 14 -> 19;
console.log(myString.slice(14));            // Cắt từ ký tự 14 -> end;
console.log(myString.slice(0));             // Cắt từ đầu tới cuối;
console.log(myString.slice(-3, -1));        // Cắt từ cuối lên;

// 4. Replace:
console.log(myString.replace(/JS/g, 'Javascript'));

// 5. Convert to upper case
console.log(myString.toUpperCase());

// 6. Convert to lower case
console.log(myString.toLowerCase());

// 7. Trim
console.log(myString.trim());
console.log(myString.trim().length);

// 8. Split
var languages = 'Javascript, PHP, Ruby';
console.log(languages.split(', '))  // Tim điểm chung để cắt các phần tử trong chuỗi thành 1 mảng.
console.log(languages.split(''))    // Tìm điểm chung, cắt tất cả các ký tự thành phần tử trong mảng.


// 9. Get a character by index:
const myString2 = 'Luong Do' ;
console.log(myString2.charAt(10));  // Tìm chữ cái trong chuỗi theo vị tr truyền vào.