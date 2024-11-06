import { Fragment, useState, useEffect } from "react";

/**
Lý thuyết useEffect
  Events: Add / remove event listener
  Observer pattern: Subcribe / UnSubcribe
  Closure
  Timer: setInterval, setTimeout, clearInterval, clearTimeout
  useState
  Mounted / UnMounted
  ===
  Call API



  1. Update DOM
    - F8 blog title
  2. Call API
  3. Listen DOM events
    - Scroll
    - Resize
  4. Cleanup 
    - Remove Listener / UnSubcribe
    - Clear timer
 */

/**
  1. Dùng useEffect khi nào?
    - Dùng khi thay đổi các Side effects. (Khi có 1 tác động xảy ra -> dẫn đến dữ liệu và giao diện thay đổi.)
    import {useEffect, useState} from 'react'
  2. Các trường hợp với useEffect(callback, [deps])
  TH1: useEffect(callback)             (Chỉ có mỗi callback)
  TH2: useEffect(callback, [])         (useEffect có callback và mảng rỗng)
  TH3: useEffect(callback, [deps])     (useEffect có callback và mảng dữ liệu dạng biến [deps])
  -> Cả 3 trường hợp đều gọi callback sau khi component mounted (sự kiện thay đổi nội dung)

  3. Chi tiết các trường hợp của useEffect và ví dụ.
    - TH1: useEffect(callback)        UseEffect Chỉ có mỗi callback
    -> useEffect sẽ gọi callback mỗi component re-render 
    -> gọi callback sau khi component thêm element vào DOM (sự kiện trong DOM sẽ đc hiển thị trước sự kiện trong useEffect.)

    - TH2: useEffect(callback, [])    UseEffect Có callBack và 1 mảng rỗng
    -> Chỉ gọi 1 lần duy nhất sau khi component đc mounted

    - TH3: useEffect(callback, [deps])  UseEffect có callback và biến dependences
    -> callback sẽ đc gọi mỗi khi deps thay đổi.

 */


const tabs = ['posts', 'comments', 'albums'];
const Content = () => {
  const [title, setTitle] = useState('');                 // Khởi tạo title là chuỗi rỗng   (VD TH1)
  const [posts, setPosts] = useState([]);                  // Khởi tạo posts là mảng rỗng    (VD TH2)
  const [type, setType] = useState('posts');              // Khởi tạo type mặc định là posts (VD TH3)
  // console.log(type)

  // VD TH1:  change title 
  // useEffect(()=>{
  //   // console.log('Mounted', title)                      // Mội khi title thay đổi thì sẽ render lại                    
  //   // Console log Mounted mỗi khi re-render lại trang
  //   document.title = title;                               // Cập nhật title mỗi khi tile thay đổi
  //   console.log(title);
  // })  

  // VD TH2: call API
  // Nếu fetch api ở bên ngoài useEffect thì cũng giống như fetch api ở bên trong useEffect chỉ có callback
  // Nó sẽ call api liên tục mỗi khi re-render page
  // Nếu ko có mảng rỗng đằng sau thì nó sẽ re-render và call api để lấy data, và đưa data để render -> re-render nhiều lần (vòng lặp vô hạn)
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => res.json())
  //     .then(posts => {
  //       setPosts(posts)
  //     })
  // }, [])

  // VD TH3:
  // Tạo useEffect để hiện thị list data mỗi khi click vào button navigation.
  /**
   * Truyền vào dependences một biến type, set biến type vào chuỗi fetch dạng template String `link/${type}`
   * Trong fetch có xử lý 1 useState là setPosts(data): Nếu data (value đc chuyển thành json) thay đổi thì nội dung render cũng thay đổi.
   *    data là dữ liệu dạng mảng nên setPosts[data] là hợp lệ.
   *    Sau khi setPosts[data] xong thì posts hiện tại sẽ = mảng data
   * tabs.map(tab=>(button....)) truyền mảng tabs vào để lấy làm tab navigation
   *    onClick để mỗi khi click vào tab thì lấy tên tab đc click vào rồi setType(tab)    type mặc định ban đầu là 1 chuỗi 'posts' nên khi lấy tên thì 'type' cũng hợp lệ.
   * ul hiển thị danh sách li với posts đc lấy từ mảng data mới setPosts ban nãy.
   *    sau đó sẽ render các thẻ li với nội dung post.name or post.title
   * 
   */
  useEffect(()=>{
    console.log("Title Change")
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [type])

  return (
    <Fragment>
      <h2>Hello Đỗ Tiến Lượng</h2>
      <h2>Đây là bài học về UseEffect</h2>
      {tabs.map((tab)=>(
        <button 
          key={tab} 
          style={type === tab ? {
            color: '#fff',
            backgroundColor: '#333'
          } : {}}
          onClick={()=>setType(tab)}
        >
          {tab} 
        </button>
      ))}
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <ul>
        {posts.map((post)=>(
          <li key={post.id}>{post.title} || {post.name}</li>
        ))}
      </ul>
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