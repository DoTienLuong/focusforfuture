import { useState, useRef, useEffect} from "react";

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
  const [count, setCount] = useState(60);
  const timeID = useRef(60); 
  // Khởi tạo biến timeID để lưu id cho việc start và stop
  // Khởi tạo timeID = undefined (Mặc định của useRef khi rỗng là undefined)
  // các biến được khởi tạo với useRef luôn là 1 object và có prop là current với value là giá trị khởi tạo useRef(value)
  // Để sử dụng useRef thì luôn phải dụng biến.current (timeID.current)
  const preCount = useRef();  // Khởi tạo preCount = useRef (Dùng để lấy giá trị hiện tại trước khi thay đổi)
  useEffect(()=>{             // useEffect luôn đc gọi 1 lần sau khi component mounted, mới zô cái lấy giá trị current = count luôn.
    preCount.current = count; // Lưu preCount.current = count = giá trị hiện tại tại trước khi re-render (trước khi setState mới)
  }, [count]);                // Nếu count thay đổi thì preCount.current cũng sẽ được cập nhật bằng giá trị count ở thời điểm sau khi thay đổi.


  const clickToStart = () => {
    timeID.current = setInterval(()=>{
      setCount(pre => pre - 1);
    }, 1000)
    console.log("Start -> ", timeID.current);
  }

  const clickToStop = () => {
    clearInterval(timeID.current)
    console.log("Stop -> ", timeID.current);

  }
  console.log(count, preCount.current) // preCount.current in ra luôn là in value trước khi được cập nhật.
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={clickToStart}
      >
        Start
      </button>
      <button
        onClick={clickToStop}
      >
        Stop
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