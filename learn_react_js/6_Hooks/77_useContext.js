/**
B1. Tạo folder store có các file sau:
1. file actions:
import { SET_TODO_INPUT, ADD_TODO, DEL_TODO, CHANGE_TODO } from "./contains";
export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});
export const delTodo = (payload) => ({
  type: DEL_TODO,
  payload,
});
export const changeTodo = (payload) => ({
  type: CHANGE_TODO,
  payload,
});


2. file contains:
export const SET_TODO_INPUT = 'set_todo_input';
export const ADD_TODO = 'add_todo';
export const DEL_TODO = 'del_todo';
export const CHANGE_TODO = 'change_todo';



3. file  Context:
import {createContext} from 'react'
const Context = createContext();
export default Context;
// File này để cấu hình các context để truyền và nhận
// Context dùng để tạo ra provider (import tại Provider)


4. file hooks: 
import {useContext} from 'react'
import Context from "./Context";
// Import 
const useStore = () => {
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
    // useStore return ra state, dispatch
}
export {useStore} 


5. file index:
// File Index này là để export tất cả các file theo ý mình mà ko cần phải /// nhiều
// FIle index phải viết đúng cú pháp
export {default as StoreProvider} from './Provider'
export {default as StoreContext} from './Context'
// Export hooks để sử dụng cho tiện
export * from './hooks'
// Cái gì export lẻ trong hooks thì sẽ export
// export file Contain và Actions
export * as actions from './actions' 
// export tất cả bên trong thành object



6. file logger:
function logger(reducer){
    return(preState, action) => {
        console.group(action.type);
        console.log('Pre State: ', preState);
        const nextState = reducer(preState, action);
        console.log('Next State: ', nextState);
        console.groupEnd();
        return nextState;
    }
}
export default logger;



7. file provider
// Provider để cung cấp dữ liệu xuống tất cả các component
import {useReducer} from 'react'
import Context from "./Context";
import reducer, {initState} from './Reducer';
// Tạo reducer và initState ở file Reducer.js
import logger from './logger';
function Provider({children}){
    const [state, dispatch] = useReducer(logger(reducer), initState)
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
export default Provider;
// Provider là truyền dữ liệu tới tất cả các component con. 
// Dùng Context để tạo Provider truyền dữ liệu tới các component. Trong trường hợp này truyền state và dispatch
// mà state và dispatch được khởi tạo từ useReducer(logger(reducer), initState)
// reducer và initState được lấy từ Reducer.js 
// => value của Context bây giờ là lấy từ Provider => value (state và dispatch)
// Tức là file nào mà sử dụng Context sẽ nhận được value là (state và dispatch)
// Sang file Hook.js, 
// Khi Hook.js sử dụng useContext(Context) sẽ trả về 2 value đó là state và dispatch
// File hooks.js có hàm useStore lưu 2 value nhận đc từ provider (state và dispatch)



8. file reducer:
import {SET_TODO_INPUT, ADD_TODO, DEL_TODO, CHANGE_TODO} from './contains'
// File Reducer này sử dụng trong Provider 
const initState = {
    todos: [],
    todoInput: '',
}
function reducer(state, action){
    switch(action.type){
        case SET_TODO_INPUT:
            return{
                ...state,
                todoInput: action.payload       
                // Mỗi khi lick vào đây thì ...giữ nguyên state hiện tại và cập nhật thêm nội dung của payload vào todoInput.
            }
        case ADD_TODO:
            return{
                ...state,
                todos:[...state.todos, action.payload]
            }
        case DEL_TODO:
            const newTodo = [...state.todos]
            newTodo.splice(action.payload, 1)
            return{
                ...state,
                todos: newTodo,
            }
        default: 
            throw new Error('Invalid actions.')
    }
}
// Nên export ở cuối file
export {initState}
export default reducer;



P2"
    1. file index tổng:
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



    2. file App.js
    import {useStore, actions} from './store'  
// Cái này được import từ file index, index export các hooks của file hooks
// useStore là của file hooks
// actions là của file actions
function App(){

  const [state, dispatch] = useStore();
  // Thay vì mỗi lần dùng cứ phải: state.todo, state.todoInput
  const {todos, todoInput} = state; // phải đúng tên trong Reducer
  // Giờ mỗi lần sử dụng thì chỉ cần todoInput = state.todoInput
  // Chúng ta nên tạo ra hook để ko cần phải import nhiều như v.
  console.log(todos);
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
  }

  const handleChange = () => {
    dispatch()
  }
  return (
    <div>
      <h1>Bây giờ chúng ta sẽ bắt đầu nắm chắc nội dung về useContext</h1>
      <input 
        value={todoInput}
        placeholder='Enter Todo...'
        onChange={e=> {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>
        Add 
      </button>
      <button onClick={handleChange}>
        Add 
      </button>
      <ul>
        {todos.map((todo, index)=>[
          <li key={index}>
            {todo}
            <span
              onClick={() => dispatch(actions.delTodo(index))}
            >
              &times;
            </span>
          </li>
        ])}
      </ul>
    </div>
  )
}
export default App;

// Provider là truyền dữ liệu tới tất cả các component con. 
// Dùng Context để tạo Provider truyền dữ liệu tới các component. Trong trường hợp này truyền state và dispatch
// mà state và dispatch được khởi tạo từ useReducer(logger(reducer), initState)
// reducer và initState được lấy từ Reducer.js 
// => value của Context bây giờ là lấy từ Provider => value (state và dispatch)
// Tức là file nào mà sử dụng Context sẽ nhận được value là (state và dispatch)
// Sang file Hook.js, 
// Khi Hook.js sử dụng useContext(Context) sẽ trả về 2 value đó là state và dispatch
// File hooks.js có hàm useStore lưu 2 value nhận đc từ provider (state và dispatch)


// actions được lấy từ file action
/**
  Action tạo ra hàm setTodoInput, hàm này mang trả về 1 object gồm 1 tham số truyền vào và 1 key lấy từ type.
  dispatch sẽ hoạt động ở đây, actions sẽ trả về key với type: SET_TODO_INPUT 
  dispatch sẽ gọi lại hàm useStore(), mà useStore() sẽ gọi lại về file hooks, hooks sẽ gọi lại lên Context và Context lại là từ gốc là file Provider.js
  dispatch trong provider lại gọi tới useReducer với reducer và initState được lấy từ Reducers.js
  Khi reducer trong Reducer.js hoạt động:
  state trong dispatch mặc định sẽ lấy từ initState. Ban đầu là oject có 2 phần tử là todos và todoInput,
  action.type được lấy từ action dạng object được lấy từ setTodoInput.  action trả về {type: 'ssdf', payload: 'e.target.value'}
  dispatch nhận object, object này sẽ truyền vào reducer(state, action(object))
  Khi (action.type ===SET_TODO_INPUT)
  state ban đầu giữ nguyên, todoInput thay đổi với action.payload
  *** Trong action sẽ xử lý trong file reducer, reducer sẽ nhận state và action
  action đang là 1 object nên switch sẽ nhận action.type để truyền case.
  ...state ban đầu là oject có 2 phần tử là todos và todoInput, 
  Nhưng khi case = SET_TODO_INPUT thì trả lại state ban đầu và cập nhật paylaod vào todoInput trong state.
  ==>>> Mỗi 1 lần thay đổi thì dispatch hoạt động và re-render lại component
  ->> Cuối cùng thì tôi cũng nắm đc 90%, 10% còn lại là thuộc tất cả code.
  */
