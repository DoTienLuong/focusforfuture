import {useReducer} from 'react'

// InitState: Giá trị khởi tạo cho reducer
const initState = 0;                                                // Tạo giá trị khởi tạo = 0 cho reducer

// Actions: Tạo case và tự định nghĩa để cho dễ hiểu
const UP_ACTION = 'up';                                             // Tạo case Up với giá trị 'up' để tự hiểu là khi chọn UP_ACTION nghĩa là là tăng         
const DOWN_ACTION = 'down';                                         // Tạo case Up với giá trị 'down' để tự hiểu là khi chọn UP_ACTION nghĩa là là giảm

//reducer: tạo hàm lấy giá trị khởi tạo và action để cho dispatch sử dụng.
const reducer = (state, action) => {                                                  
  switch(action){
    case UP_ACTION:                                                 // Truyền case vào dispatch để gọi tới case.
      return state + 1;
    case DOWN_ACTION:                                                       
      return state - 1;
    default:                                                        // Phải có default để chương trình xử lý khi case ko phù hợp
      throw new Error ('Invalid action!')
  }
}


const App = () => {
  const [valueCurrent, dispatch] = useReducer(reducer, initState);         // Tạo biến giống dạng useState nhưng dùng useReducer (useState làm đc gì thì useReducer làm đc đó)
  /**
   * Cách useReducer hoạt động:
   * Tạo hàm dạng state, setState bằng useReducer((function(giá trị khởi tạo, hành động)), giá trị khởi tạo)
   * vd: const [valueCurrent, dispatch] = useReducer(reducer, initState)
   * 
   * Mỗi khi có sự kiện cần dùng tới thay đổi component thì gọi dispatch(action)  Truyền action (hành động) tương ứng với case được khởi tạo trong hàm reducer.
   * dispatch sẽ gọi reducer trong useReducer(reducer, initState)
   * reducer sẽ luôn có (state, action) <> reducer(initState, action) <> reducer(giá trị khởi tạo, hành động)
   * 
   * --> Kết quả trả về của reducer sẽ đc lưu vào valueCurrent.
   * 
   */
  return (
    <div style={{padding: '0px 20px'}}>
      <h1>{valueCurrent}</h1>
      <button
        onClick={() => dispatch(UP_ACTION)}
      >
        UP
      </button>
      <button
        onClick={() => dispatch(DOWN_ACTION)}
      >
        DOWN
      </button>
    </div>
  )
}

export default App;

/**
Lần đầu tiên reducer được gọi, state trong reducer sẽ lấy giá trị từ initState, không phải từ currentValue.

Giải thích chi tiết:
Khởi tạo với initState:

Khi useReducer(reducer, initState) được gọi trong component lần đầu, React sẽ thiết lập state ban đầu bằng initState (trong ví dụ này là 0).
currentValue được gán giá trị 0 từ initState.
Lần đầu gọi dispatch:

Khi bạn nhấn nút lần đầu và gọi dispatch, reducer sẽ nhận state hiện tại từ useReducer, và state này chính là initState (vì đây là lần gọi đầu tiên).
Giá trị này không phải từ currentValue, mà là từ initState đã được truyền vào useReducer.
Lần nhấn tiếp theo:

Mỗi lần dispatch được gọi sau đó, state trong reducer sẽ lấy giá trị từ lần cập nhật trước, không quay lại initState.
currentValue sẽ cập nhật theo giá trị state mới sau mỗi lần gọi reducer.
Tóm lại:
Lần đầu reducer được gọi, state của nó lấy giá trị từ initState, và currentValue cũng được khởi tạo từ initState.


======>>>>>>>>>>>> state trong reducerfn sẽ lấy value của initState làm giá trị khởi tạo
-> giá trị return từ reducerfn sẽ đc cập nhật vào currentValue
-> giá trị return từ reducerfn cũng sẽ đưa lên lại state truyền vào làm state trong reducerfn để thực hiện tiếp Ctrinh.

Chat GPT:
Tổng kết theo cách bạn hiểu:
state trong reducer khởi tạo từ initState.
reducer trả về một giá trị mới, cập nhật currentValue.
Giá trị mới này cũng trở thành state cho lần xử lý tiếp theo của reducer.
Với cách hiểu này, bạn đã nắm vững luồng hoạt động của useReducer.
*/