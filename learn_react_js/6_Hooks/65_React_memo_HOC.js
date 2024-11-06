// App.js

import { useState} from "react";
import Content from './Content';

/**
  1. memo() -> Được hiểu là 1 Higher Order Component (HOC)
  2. useCallback()

  Các khái niệm thường hay sử dụng trong react:
  Hooks
  HOC
  Render props
  -> NGta thiết kế để mình kế thừa các tính năng để tránh lặp đi lặp lại.
 */

  // Cách sử dụng memo
  /**
    export default memo(Content) 

    -> Content sẽ đc re-render lại nếu như các props đc truyền vào Content bị thay đổi.
    1 Component sẽ có rất nhiều props đc truyền vào, chỉ cần 1 cái thay đổi thôi thì Component sẽ đc re-render
   */

const App = () => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const handleUpdateCount = () => {
    setCount(preCount => preCount+1);
  }
  const handleUpdateCount2 = () => {
    setCount2(preCount => preCount+1);
  }
  return (
    // Mỗi lần click vào button thì nó sẽ mount giao diện lên (true), 
    // ấn thêm 1 lần nữa thì set thành (false) thì sẽ ẩn giao diện
    <div style={{padding: 20}}>
      <button onClick={handleUpdateCount}>Update</button>
      <button onClick={handleUpdateCount2}>Update2</button>
      <h1>{count}</h1>
      <h2>{count2}</h2>
      {count && <Content outCount = {count} />}
    </div>
  )
}
export default App;

// Content.js
import { memo } from "react";

const Content = ({outCount}) => {
    console.log("re-render")
    return (
      <div>
        <h1>{outCount}</h1>
      </div>
    )
}

// export default memo(Content);
  