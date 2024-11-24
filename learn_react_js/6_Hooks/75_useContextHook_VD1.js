/**
 * Ví dụ 1: Chưa sử dụng useContext
 * Chúng ta muốn truyền dữ liệu từ Component A sang Component C thì phải truyền qua Component B, 
 * chúng ta phải truyền qua props và điều đó rất phức tạp nếu như có vô số props và component UI
 */

//Các file.js:
// App.js
import {useState} from 'react'
import Content from './Content'
import './App.css'
const App = () => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return(
    <div style={{padding: 20}}>
      <button
        onClick={toggleTheme}
      >
        Change Theme
      </button>
      <Content theme={theme}/>
    </div>
  )
}
// export default App;

// Content:
import Paragraph from "./Paragraph";
const Content = ({theme}) => {                         // Content nhận props từ App để sử dụng.
    return (
      <div>
        <Paragraph theme={theme}/>
      </div>
    )
}

// export default Content;
  

// Pagagraph: 
function Paragraph({theme}){
    console.log("theme: ", theme);
    return(
        <p className={theme}>
          hàm dispatch sẽ gọi đến reducer, mà reducer trong trường hợp này cần nhận action dạng Object
          Vì thế cần truyền vào dispatch 1 action dạng object, mà fnSetJob return 1 object nên action hợp lệ.
          fnSetJob sẽ return object có type: Set_Job và payload: 'nội được gõ lấy từ e.target.value'
        </p>
    )
}
// export default Paragraph;