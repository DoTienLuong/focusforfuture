var cars = ['Rolls-Royce', 'Mercedes', 'Lexus', 'BMW', 'Audi'];

function checkCar(cars) {
   return cars.includes('Mercedes', 2);
}

console.log(checkCar(cars)); // Output: ?
// includes là tìm value trong array theo index. Nếu tìm thấy thì return true, ngược lại return false.