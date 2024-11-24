// File Video:
import {forwardRef, useImperativeHandle, useRef} from 'react'
import video from './Video/Video.mp4'
function Video(props, refVideo){

    const videoRef_Video = useRef()

    useImperativeHandle(refVideo, () => ({
        play(){
            videoRef_Video.current.play()
        },
        pause(){
            videoRef_Video.current.pause()
        }   
    }))
    return(
        <video 
            ref={videoRef_Video}
            src={video}
            width={280}
        />
    )
}
export default forwardRef(Video);

/** 
    forwardRef sẽ nhận ref từ component cha và truyền vào component con (Video) với props thứ 2. (ref)
    useImperativeHandle sẽ nhận 2 tham số, 1 là ref được truyền từ component cha, 2 là 1 callback trả về object để thực hiện chức năng cho ref đó

 * */ 


// File App.js
import { useEffect, useRef } from 'react'
import Video from './Video'
function App(){
  const videoRef_App = useRef()
  
  useEffect(()=>{
    console.log(videoRef_App.current)
  })

  const handlePlay = () => {
    videoRef_App.current.play()
  }
  const handlePause = () => {
    videoRef_App.current.pause()
  }
  return(
    <div>
      <Video refVideo ={videoRef_App}/>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  )
}
// export default App;

// truyền vào ref một useRef để lấy tham chiếu link videoRef sẽ là oject có props là current
// videoRef_App được tạo từ useRef để truyền xuống component con.
// Tạo props tên refVideo và truyền {videoRef_App} cho component Video
// Component video mà sử dụng videoRef_App là sẽ nhận đc element để thực thi
// Mở file Video.js và giải thích tiếp:
// Dùng forwardRef(Video) để nhận props từ component cha là refVideo và nhận làm tham số thứ 2 trong compnent Video
// Lúc này refVideo là object có props là current,
// Truyền refVideo vào useImperativeHandle làm tham số thứ nhất, tham số thứ 2 là callback trả về 2 object
// object có 2 value là play và pause.
// => video_App nhận về current là là object có 2 function là play() và pause()
// Mà function đó return về xử lý của videoRef_Video.