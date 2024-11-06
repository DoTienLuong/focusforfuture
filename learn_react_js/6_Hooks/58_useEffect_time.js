import { useState, useEffect} from "react";

const Content = () => {
  const [countdown, setCountdown] = useState(180);

  useEffect(()=>{
    const timeID = setInterval(()=>{
      setCountdown(pre => pre -1 );
      console.log('Countdown: ');
    }, 1000)

    return () => clearInterval(timeID);
  }, [])


  return(
    <div>
      <h1>{countdown}</h1>
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