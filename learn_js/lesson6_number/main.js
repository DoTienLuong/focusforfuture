/**
 * Làm việc với số:
 * To string
 * TO fixed
 */

var age = 21;
var PI  = 3.14;
var result = 20/1;

console.log(isNaN(result));

console.log(age.toString());

var myString = age.toString();
console.log(myString);

console.log(PI.toFixed());      // mặc định là làm tròn ko lấy số lẻ đằng sau.
console.log(PI.toFixed(3));     // Làm tròn lấy sau dấu . 3 đơn vị.   