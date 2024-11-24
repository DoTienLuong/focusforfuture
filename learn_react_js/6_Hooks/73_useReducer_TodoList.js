import {useReducer, useRef} from 'react'

// InitState: Giá trị khởi tạo cho reducer
const initState = {               // Tạo giá trị khởi tạo = object cho reducer
  job: '',
  jobs: []
};                                                

// Actions: Tạo case và tự định nghĩa để cho dễ hiểu
const SET_JOB = 'set_job';                                                     
const ADD_JOB = 'add_job';   
const DEL_JOB = 'del_job';          

const fnSetJob = (payload) => {
  return{               // return của fn này là 1 object có 2 props là type và payload.
    type: SET_JOB,      // Định nghĩa type để lưu action truyền vào dispatch.
    payload             // value đc truyền vào fn sẽ được hiện thị dạng payload: value. 
                        // <> tương đương với payload: payload (áp dụng ES6 phần spread).
  }
}

const fnAddJob = (payload) => {
  return{
    type: ADD_JOB,
    payload
  }
}

console.log(fnSetJob('Rửa bát')); // hàm này sẽ return 1 object có 2 props là type: SET_JOB, payload: 'rửa bát'
//reducer: tạo hàm lấy giá trị khởi tạo và action để cho dispatch sử dụng.
const reducer = (state, action) => {                                                  
  // console.log(action) // mỗi action là 1 object mới.
  console.log('Action: ', action);
  console.log('PreState: ', state);
  let newState;
  switch(action.type){
    
    case SET_JOB: 
      newState = {            // Sau mỗi lần render, newState sẽ cập nhật lại giá trị cho state hiện tại.
        ...state,             // Lấy giá trị state hiện tại giữ nguyên 
        job: action.payload   // Cập nhật cho state với giá trị mới nhập từ e.target.value
      }
      break;
    case ADD_JOB: 
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]   // mảng jobs được cập nhật với giữ nguyên mảng jobs hiện tại và thêm job mới từ payload
      }
      break;
    case DEL_JOB:
      const newJob = [...state.jobs]            // Tạo newJob = mảng jobs hiện tại.
      newJob.splice(action.payload, 1)          // splice là xoá đi phần tự tại vị trí truyền và và số lượng xoá. 
      // action.payload sẽ là index của vị trí xoá, mà index đc lấy từ hàm map chứ từ đâu =)). easy.
      newState = {
        ...state,
        jobs: newJob,
      }
      break;
    default:
      throw new Error('Invalid Action.')
  }
  console.log('New State: ', newState);
  return newState;
  // return state;
}


const App = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const {job, jobs} = state;
  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(fnAddJob(job))
    dispatch(fnSetJob(''));           // Sau khi thêm thì set lại job tại ô nhập là rỗng
    inputRef.current.focus();         // Focus lại sau mỗi lần click
  }
  return (
    <div style={{padding: '0px 20px'}}>
      <h3>To do List</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder='Enter your job for to day: '
        onChange={e => {
          dispatch(fnSetJob(e.target.value))      
          // hàm dispatch sẽ gọi đến reducer, mà reducer trong trường hợp này cần nhận action dạng Object
          // Vì thế cần truyền vào dispatch 1 action dạng object, mà fnSetJob return 1 object nên action hợp lệ.
          // fnSetJob sẽ return object có type: Set_Job và payload: 'nội được gõ lấy từ e.target.value'
        }}
      />
      <button
        onClick={handleSubmit}
      >
        Add
      </button>
      <br/>
      <ul>
        {jobs.map((nameJob, index)=>(
          <li key={index}>
            {nameJob} 
            <span
              onClick={()=> dispatch(DEL_JOB(index))}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;