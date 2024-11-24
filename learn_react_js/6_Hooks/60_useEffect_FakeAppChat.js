import { useState, useEffect} from "react";


// Bước 1: Vô file index tạo event như sau: 
/**
// Khởi tạo event theo ý của mình
function emitComment(id){
  setInterval(()=>{
    window.dispatchEvent( // Tạo event để sử dụng
      new CustomEvent(`room-${id}`, { // Tên event là trước dấu phẩy, sau dấu phẩy là dành cho function component
        detail: `Nội dung comment của room ${id}`
      })
    )
  }, 2000)
}
emitComment(1);
emitComment(2);
emitComment(3);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 */
//Bước 2: Code như dưới:
const rooms = [
  {
    id: 1,
    name: "Nhóm của Huy và Lượng"
  }, 
  {
    id: 2,
    name: "Nhóm của Đức và Khang"
  },
  {
    id: 3,
    name: "Nhóm của Tâm và Thành"
  }
]
const Content = () => {
  
  const [useRoom, setUseRoom] = useState(1);
  useEffect(()=>{
    const handleComment = ({detail}) => {
      console.log(detail);
    }
    window.addEventListener(`room-${useRoom}`, handleComment)
    return() => {
      window.removeEventListener(`room-${useRoom}`, handleComment)
    }
  }, [useRoom])


  return (
    <div>
      <ul>
        {rooms.map(room => (
          <li
            key={room.id}
            style={{
              color: room.id === useRoom ? 'red' : "#333"
            }}
            onClick={()=>setUseRoom(room.id)}
          > 
            {room.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

const App = () => {
  const [show, setShow] = useState(false);

  return (
    // Mỗi lần click vào button thì nó sẽ mount giao diện lên (true), 
    // ấn thêm 1 lần nữa thì set thành (false) thì sẽ ẩn giao diện
    <div style={{padding: 20}}>
      <button onClick={()=>setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  )

}
export default App;