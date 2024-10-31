import { useState } from "react";

const App = () => {
    const [cars, setCars] = useState(['Bugatti', 'Koenigsegg', 'Mclaren', 'Ferrari']);  // Khởi tạo cars là 1 mảng danh sách có nhiều car.
    
    // Update:
    const [inputCar, setInputCar] = useState('') // khởi tạo giá trị input ban đầu là rỗng

    const handleUpdateCar = () => {
        if(inputCar.trim()){    // Kiểm tra nếu input ko rỗng.
          // setCars((preCar) => {
          //     return [...preCar, inputCar]
          // })
          // Cách ngắn gọn hơn:
          setCars((preCar) => [...preCar, inputCar]); // thêm car từ input vào cars
          setInputCar('') // set lại trạng thái input là rỗng
        }
    }   
    console.log(cars)

    const Laptops = [           // Tảo mạng lưu laptop 
      'Sony Vaio SVF1421DSGW',
      'HP 15s fq1107td',
      'Acer Aspire A315 34'
    ]
    const [laptop, setLaptop] = useState()  // khởi tạo laptop là giá trị rỗng
    const randomLaptop = () => {
      var index = Math.floor(Math.random() * Laptops.length)  // lấy ngẫu nhiên thứ tự trong mảng laptop
      setLaptop(Laptops[index]);  // set giá trị laptop lấy từ laptops[index]
    }

    const [carGift, setCarGift] = useState()  // khởi tạo mảng carGift là rỗng
    const randomCar = () => {
      var index = Math.floor(Math.random() * cars.length) // Lấy giá trị ngẫu nhiên thứ tự trong mảng cars đc set từ setCars
      setCarGift(cars[index]); // giá trị carGift lấy từ cars[index]
    }

    return(
        <div style={{padding: 20}}>
            <p>Danh sách xe: {cars}</p>
            <input 
              type="text"
              value={inputCar}
              onChange={(e)=>setInputCar(e.target.value)} // Khi thay đổi value, thì setInputCar sẽ thay đổi inputCar theo value đc thay đổi.
              placeholder="Nhập tên xe bạn muốn thêm"
            />
            <button onClick={handleUpdateCar}>Cập nhật thêm xe</button>
            <h3>{laptop || 'Chưa có laptop'}</h3>
            <button onClick={randomLaptop}>random laptop</button>
            <h3>{carGift || 'Chưa có ô tô'}</h3>
            <button onClick={randomCar}>random car</button>

        </div>
    )
}
export default App;