// useState: trạng thái của dữ liệu
// useState trả về mảng có 2 biến, 1 biến lưu dữ liệu hiện tại, 1 biến là function để cập nhật giá trị hiện tại.
// function đó sẽ thay thế giá trị hiện tại.
import {useState} from 'react'

const orders = [100, 200, 300];
function App() {
  
  // console.log(total); 
  
  const [counter, setCounter] = useState(()=> {
    const total = orders.reduce(((cur, value) => cur + value), 0);
    return total;
  });

  const handleIncrease = () => {
    setCounter(preState=>preState+1);
  }

  const [info, setInfo] = useState({
    name: 'Đỗ Tiến Lượng',
    age: 21,
    address: "Bien Hoa, Dong Nai, Viet Nam"
  });
  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: "Yêu màu hồng ^^"
    })
  }
  return (
    <div style={{padding: 20}}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  )
}


export default App;