//1 File index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// Import BrowserRouter as Router để có thể xài BrowserRouter với tên Router.
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




//2 File App.js
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NewsPage from './Pages/NewsPage'
import ContactPage from './Pages/ContactPage'
import { Link } from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/News">News Page</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Page</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Bắt đầu nhé.</h1>
      </div>
      <Routes>
        <Route path='/' element={< HomePage />}  />
        <Route path='/News' element={< NewsPage />}  />
        <Route path='/Contact' element={< ContactPage />}  />
      </Routes>
    </div>
  );
}
/**
 * Import Routes và Route để sử dụng định tuyến page
 * Routes là định tuyến cha, Route là các page định tuyến chỉ định.
 * Trong Route thì truyền path với link đc truyền tới và element là các element được lấy từ component
 * 
 * *** Lưu ý: Các đường dẫn có thể dùng bằng Link thay vì dùng thẻ a với href truyền link,
 * Vì mỗi lần click vào thẻ a thì sẽ render lại component và như vậy sẽ giống MPA (Multi Page Application)
 * Còn khi click vào thẻ Link thì chỉ chuyển tới component đó và như vậy sẽ là SPA (Single Page Application) (Không render lại component UI)
 * Chúng ta đang code SPA nên ưu tiên sử dụng Link import từ React-Router-Dom với link được truyền qua to (href)
 */
export default App;


//3 File ContactPage.js
function Contact (){
    return(
        <h1>This is Contact Page</h1>
    )
}
// export default Contact;


//4 File HomePage.js
function Home (){
    return(
        <h1>This is Home Page</h1>
    )
}
// export default Home;


//5 File NewsPage.js
function News (){
    return(
        <h1>This is News Page</h1>
    )
}
// export default News;




