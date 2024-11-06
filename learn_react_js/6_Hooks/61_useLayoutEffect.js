
import { useState, useLayoutEffect} from "react";

/**
  Sự khác nhau giữa useEffect và useLayoutEffect:
// useEffect:
1. Cập nhật lại trạng thái state
2. Cập nhật lại DOM
3. Render lại UI
4. Gọi cleanup nếu deps thay đổi
5. Gọi useEffect callback
-> Khi setState, renderUI trước khi kiểm tra điều kiện trong useEffect


// useLayoutEffect:
1. Cập nhật lại state
2. cập nhật lại DOM
3. Gọi cleanup nếu deps thay đổi (sync)
4. Gọi useLayoutEffect callback (sync)
5. Rnder lại UI
-> Khi setState, kiểm tra điều kiện trong useLayoutEffect trước khi renderUI

 */


const Content = () => {
  const [count, setCount] = useState(0);
  useLayoutEffect(()=>{
    if(count>3)
      setCount(0);
  },[count])
  const clickToCount = () => {
    setCount(pre => pre + 1);
  }



  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={clickToCount}
      >
        Click to count
      </button>
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