// File index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// file ThemeContext.js
// Tạo Context và tạo ra Provider (dữ liệu của context)

import { useState, createContext } from "react";

//B1: Tạo ra ThemContext 
const ThemeContext = createContext();

function ThemeProvider({children}) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  //B2: Tạo value để truyền cho các component UI
  const value = {
    theme,
    toggleTheme
  }
  return (
    //B3: Sử dụng ThemeContext để tạo ra Provider truyền value, truyền vô App.js đc luôn
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
// Export để có thể sử dụng tại các class khác
export { ThemeContext, ThemeProvider };


// File App.js:
import Content from "./Content";
//B4: Sử dụng ThemeContext mới tạo từ file ThemeContext
import {ThemeContext} from './ThemeContext'
// Sử dụng useContext để lấy ThemeContext
import {useContext} from 'react'
import "./App.css";

// Chúng ta sẽ tạo ra 1 object để sử dụng createContext (provider (truyền), consumer (nhận))
// Mỗi lần tạo Context sẽ là Context mới riêng biệt cụ thể.
const App = () => {
  //B5: Tạo biến để sự dụng Context: Truyền ThemeContext vào useContext;
  const context = useContext(ThemeContext);
  return (
        //B6: sử dụng context (Trường hợp này context là object, mà context có 2 props là string theme và function setTheme )
      <div style={{ padding: 20 }}>
        <button onClick={context.toggleTheme}>Change Theme</button>
        <Content />
      </div>
  );
};
export default App;



// File Content.js: 
import Paragraph from "./Paragraph";
const Content = ({theme}) => {                         // Content nhận props từ App để sử dụng.
    return (
      <div>
        <Paragraph theme={theme}/>
      </div>
    )
}

// export default Content;
  

// FIle Paragraph.js
import { useContext } from 'react';         // Tạo useContext để lấy dữ liệu từ Context tạo ra
// import {ThemeContext} from './ThemeContext'          // Context đc tạo ra ở file App được lưu dưới dạng hàm thêm themeContext (tự mình tạo)

function Paragraph(){
    // console.log("theme: ", theme);
    //B5: 
    const context = useContext(ThemeContext); // Tạo biến lưu context được Truyền cho useContext(Themecontext)
    return(
        //B6: sử dụng context (Trường hợp này context là object, mà context có 2 props là string theme và function setTheme )
        <p className={context.theme}>
          hàm dispatch sẽ gọi đến reducer, mà reducer trong trường hợp này cần nhận action dạng Object
          Vì thế cần truyền vào dispatch 1 action dạng object, mà fnSetJob return 1 object nên action hợp lệ.
          fnSetJob sẽ return object có type: Set_Job và payload: 'nội được gõ lấy từ e.target.value'
        </p>
    )
}
// export default Paragraph;
