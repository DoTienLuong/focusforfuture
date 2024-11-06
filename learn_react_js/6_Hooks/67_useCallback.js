import { useCallback, useState} from "react";
import Content from './Content';
/**
  Kiến thức về useCallback()
  useCallback sinh ra là để áp dụng các xử lý hiệu quả với memo

 */

const App = () => {

  const [count, setCount] = useState(0);
  // useCallback dùng để lưu tham chiếu của 1 hàm
  /**
   * Mỗi 1 hàm đc render thì nó sẽ tạo ra 1 tham chiếu để truy cập tới tham chiếu đó để hoạt động hàm đó.
   * Ví dụ, khi function handleUpdateCount đc gọi trang này thì nó sẽ truyền tham chiếu tới onIncrease 1 tham chiếu để nó sử dụng trong Content
   *    Nhưng khi onIncrease hoạt động thì sẽ khởi tạo lại function và function sẽ là 1 tham chiếu mới. 
   *    Nên memo dùng toán tử so sánh === để so sánh tham chiếu của handleUpdateCount cũ và tham chiếu mới.
   *    Khi thấy tham chiếu khác nhau thì nó sẽ render lại Content.
   * 
   * -> Vì thế ta cần dùng useCallback để lưu tham chiếu cho 1 hàm, khi hàm có gọi lại thì tham chiếu vẫn là hàm đã gọi trước đó.
   * -> useCallback sẽ hoạt động giống useEffect((function),[deps]) <> useCallback((function),[deps]);
   * --->>>     useCallback sẽ tạo ra tham chiếu mới nếu như deps trong useCallback((function),[deps]) thay đổi
   */

  const handleUpdateCount = useCallback(() => {
    setCount(preCount => preCount+1);
  }, [])
  
  
  return (
    // Mỗi lần click vào button thì nó sẽ mount giao diện lên (true), 
    // ấn thêm 1 lần nữa thì set thành (false) thì sẽ ẩn giao diện
    <div style={{padding: 20}}>
      <Content onIncrease = {handleUpdateCount} />
      <h1>{count}</h1>
    </div>
    // *** props là truyền dữ liệu từ component cha xuống component con. 
    // *** props có kiểu dữ liệu nguyên thuỷ hoặc kiểu dữ liệu theo dạng tham chiếu (hàm, object, array)
  )
}
export default App;


// Content:
import { memo } from "react";

const Content = ({onIncrease}) => {                         // Content nhận props từ App để sử dụng.
    console.log("re-render")
    return (
      <div>
        <h2>Hello ae </h2>
        <button onClick={onIncrease}>Click me!</button>
      </div>
    )
}

// export default memo(Content);
  
  