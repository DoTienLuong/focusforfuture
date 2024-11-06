import { useState } from "react";

const App = () => {
    const listCar = ['Bugatti', 'Koenigsegg', 'Mclaren', 'Ferrari'];
    const [cars, setCars] = useState(()=>{                              // Khởi tạo cars là 1 mảng danh sách cars lấy từ local hoặc biến
      const storageCars = JSON.parse(localStorage.getItem('cars'));     // Lấy danh sách cars return 
      if(storageCars == null){                                          // Nếu như danh sách lấy từ local là rỗng thì lấy giá trị mảng listCar làm giá trị khởi tạo cho mảng cars
        return listCar;
      }
      return storageCars;                                               // Nếu ko phải rỗng thì return lấy storageCars làm giá trị khởi tạo cho cars
    });  
    
    // Update:
    const [inputCar, setInputCar] = useState('')                        // khởi tạo giá trị input ban đầu là rỗng

    const handleUpdateCar = () => {
        if(inputCar.trim()){                                            // Kiểm tra nếu input ko rỗng.
          // setCars((preCar) => {
          //     return [...preCar, inputCar]
          // })
          // Cách ngắn gọn hơn:
          setCars((preCar) => {                                         // Khởi tạo hàm với arrow function để setCars
            const setCar = [...preCar, inputCar];                       // Tạo biến lưu cách thức set 

            // Tạo biến lưu những giá trị sau khi thêm
            const jsonCars = JSON.stringify(setCar);                    // Tạo mảng lấy giá trị setCar (danh sách car sau khi thêm)
            localStorage.setItem('cars', jsonCars)                      // Lưu cục bộ trên web với key là cars

            return setCar;                                              // return lại hàm để thực thi function // thêm car từ input vào cars
          });                                                           
          setInputCar('')                                               // set lại trạng thái input là rỗng
        }
    }   
    const Laptops = [                                                   // Tảo mạng lưu laptop 
      'Sony Vaio SVF1421DSGW',
      'HP 15s fq1107td',
      'Acer Aspire A315 34'
    ]
    const [laptop, setLaptop] = useState()                              // khởi tạo laptop là giá trị rỗng
    const randomLaptop = () => {
      var index = Math.floor(Math.random() * Laptops.length)            // lấy ngẫu nhiên thứ tự trong mảng laptop
      setLaptop(Laptops[index]);                                        // set giá trị laptop lấy từ laptops[index]
    }

    const [carGift, setCarGift] = useState()                            // khởi tạo mảng carGift là rỗng
    const randomCar = () => {
      var index = Math.floor(Math.random() * cars.length)               // Lấy giá trị ngẫu nhiên thứ tự trong mảng cars đc set từ setCars
      setCarGift(cars[index]);                                          // giá trị carGift lấy từ cars[index]
    }

    return(
        <div style={{padding: 20}}>
            <p>Danh sách xe: </p>
            <ul>
              {cars.map((car, index)=>(
                <li key={index}>{car}</li>
              ))}
            </ul>
            <input 
              type="text"
              value={inputCar}
              onChange={(e)=>setInputCar(e.target.value)}               // Khi thay đổi value, thì setInputCar sẽ thay đổi inputCar theo value đc thay đổi.
              placeholder="Nhập tên xe bạn muốn thêm"
            />
            <button style={{marginLeft: 20}} onClick={handleUpdateCar}>Cập nhật thêm xe</button>
            <h3>{laptop || 'Chưa có laptop'}</h3>
            <button onClick={randomLaptop}>random laptop</button>
            <h3>{carGift || 'Chưa có ô tô'}</h3>
            <button onClick={randomCar}>random car</button>

        </div>
    )
}
export default App;