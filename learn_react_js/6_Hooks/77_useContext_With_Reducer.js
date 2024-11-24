/** Sử dụng useContext với useReducer
    Bước 1: Tạo file store để lưu tất cả các file js.
    Bước 2: Tạo các nội dung:
 */
// 1. Tạo file Context để tạo Context để truyền và nhận dữ liệu
// File Context: 
import {createContext} from 'react'
const Context = createContext();
// export default Context;

// File này để cấu hình các context để truyền và nhận
// Context dùng để tạo ra provider (import tại Provider)



// 2. Tạo file Reducer để sử dụng trong Provider
// File Reducer này sử dụng trong Provider 
const initState = {                 // Tạo biến lưu giá trị khởi tạo
    todos: [],  
    todoInput: '',
}
function reducer(state, action){    // Tạo function để dùng dispatch
    switch(action.type){
        //...
    }
}
// Nên export ở cuối file
export {initState}
// export default reducer;



// 3. Tạo file Provider để truyền và nhận dữ liệu từ Context: 
// File Provider:
// Provider để cung cấp dữ liệu xuống tất cả các component
import {useReducer} from 'react'
import Context from "./Context";
import reducer, {initState} from './Reducer';
// Tạo reducer và initState ở file Reducer.js
function Provider({children}){
    const [state, dispatch] = useReducer(reducer, initState)
    // SỬ dụng reducer và initState được khởi tạo từ file Reducer;
    // Chúng ta cũng có thể tạo reducer và initState ở đây nhưng tách ra thì sẽ gọn gàng hơn.
    // Khởi tạo state và dispatch để truyền xuống component (Tất cả component có thể sử dụng state và dispatch này.)
    return(
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
        // Provider sẽ ôm toàn bộ ứng dụng thì ôm tại index.js
    )
}
// export default Provider;



// 4. Tạo ra các hooks để import cho lẹ 
// file hooks trong store
import {useContext} from 'react'
// import Context from "./Context";
// Import 
const useStore = () => {
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
    // useStore return ra state, dispatch
}
export {useStore} 



// 5. Tạo file index để export với định dạng ngắn gọn:
// File index trong store
// File Index này là để export tất cả các file theo ý mình mà ko cần phải /// nhiều
// FIle index phải viết đúng cú pháp
export {default as StoreProvider} from './Provider'
export {default as StoreContext} from './Context'

// Export hooks để sử dụng cho tiện
export * from './hooks'
// Cái gì export lẻ trong hooks thì sẽ export


// 6. Cập nhật nội dung trong index.js Tổng để truyền provider:
// File index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Provider from "./store/Provider";
// Trong file sẽ có nhiều provider thì phải đặt tên theo quy chuẩn.
import {StoreProvider} from './store'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// 7. Sử dụng tất cả trong file App.js
// File App.js
//Để lấy dữ liệu đc truyền xuống: 
// b1: Lấy context:
import { StoreContext } from "./store";
// Phải import useContext để sử dụng StoreContext
import { useContext } from "react";
// Mỗi lần sử dụng, chúng ta phải import 
import {useStore} from './store' // useStore này lấy từ hooks, mà hooks đc export bởi file index
function App(){
  // const [state, dispatch] = useContext(StoreContext)
  // Thay useContext = useStore đc định nghĩa trong hooks
  const [state, dispatch] = useStore()

  console.log(state);
  // Chúng ta nên tạo ra hook để ko cần phải import nhiều như v.
  return (
    <div>
      <h1>Bây giờ chúng ta sẽ bắt đầu nắm chắc nội dung về useContext</h1>
    </div>
  )
}
export default App;


