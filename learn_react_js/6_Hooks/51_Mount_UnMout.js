import { Fragment, useState } from "react";

const Content = () => {
  return (
    <Fragment>
      <h2>Hello Đỗ Tiến Lượng</h2>
      <h2>Đây là bài học về Mount and UnMount</h2>
    </Fragment>
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