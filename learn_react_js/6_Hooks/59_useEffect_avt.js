import { useState, useEffect} from "react";

const Content = () => {
  const [avt, setAvt] = useState();

  useEffect(()=>{
    return() => {
      avt && URL.revokeObjectURL(avt.linkAvt);
    }
  })

  const handleChangeAvt = (e) => {
    const file = e.target.files[3];

    file.linkAvt = URL.createObjectURL(file);

    setAvt(file);
  }
  

  return (
    <div>
      <input 
        type="file"
        onChange={handleChangeAvt}
      />
      {avt && (
        <img src={avt.linkAvt} alt="Hinh Anh" width="80%"/>
      )}
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