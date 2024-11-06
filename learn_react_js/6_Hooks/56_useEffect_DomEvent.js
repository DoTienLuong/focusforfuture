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
/**
 *    DOM Event
 * - callback luôn đc gọi sau khi component mounted
 * - cleanup function luôn đc gọi trc conponent unmounted
 */



const tabs = ['posts', 'comments', 'albums'];
const Content = () => {
  const [title, setTitle] = useState('');                 // Khởi tạo title là chuỗi rỗng   (VD TH1)
  const [posts, setPosts] = useState([]);                 // Khởi tạo posts là mảng rỗng    (VD TH2)
  const [type, setType] = useState('posts');              // Khởi tạo type mặc định là posts (VD TH3)
  const [showGoToTop, setShowGoToTop] = useState(false);  // Khởi tạo showGoToTop là boolean (ẩn)

  useEffect(()=>{
    console.log("Title Change")
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [type])
  
  // Mỗi khi thêm effect mới thì tạo mới useEffect để dễ kiểm soát.
  // Tạo effect scroll
  useEffect(()=>{
    const handScroll = () => {
      if(window.scrollY >= 200){
        setShowGoToTop(true)
      }else{
        setShowGoToTop(false)
      }
    }
    console.log('Mounted')
    window.addEventListener('scroll', handScroll);

    return () => {
      window.removeEventListener('scroll', handScroll);
      console.log('Unmounting...')
    }
  })

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
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
        >
          Go to top
        </button>
      )}
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