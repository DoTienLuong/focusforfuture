import { useState } from "react";

const Courses = [
  {
    id: 1, 
    name: 'HTML'
  },
  {
    id: 2,
    name: 'CSS'
  },
  {
    id: 3,
    name: 'JavaScipt'
  },
  {
    id: 4,
    name: 'React JS'
  },
  {
    id: 5,
    name: 'React Native'
  },
  {
    id: 6,
    name: 'Dev C'
  },
  {
    id: 7,
    name: 'Java'
  },
  {
    id: 8,
    name: 'SQL'
  },
  {
    id: 9,
    name: 'MongoDB'
  }
];

const App = () => {
  const [checkRadio, setCheckRadio] = useState(1);          // set mặc định check số 1.
  const [checkBox, setCheckBox] = useState([]);             // set mặc định check là 1 mảng rỗng chưa có phần tử nào đc check


  const handleRegisterRadio = () => {                       // Hàm dành cho nút register trong check radio
    console.log({id: checkRadio})                           // Hiển thị các id đc check khi ấn register
  }
  const handleRegisterCheckBox = () => {                    // Hàm dành cho nút register trong check box
    console.log({ids: checkBox})                            // Hiển thị danh sách các id đc check khi ấn register
  }


  const handleCheckRadio = (id) => {                        // Tạo hàm để set value cho checkRadio
    setCheckRadio(id);                                      // set value cho checkRadio = id đc check
  }

  const handleCheckBox = (id) => {                          // Tạo hàm để set value cho checkBox
    setCheckBox(pre => {                                    // set value cho checkRadio = id đc check
      const isCheckedBox = checkBox.includes(id)            // Kiểm tra xem id hiện đang ấn đã đc check chưa
      if(isCheckedBox){                                     // Nếu true (đã đc check)
        return checkBox.filter(item => item !== id)         // loại bỏ id trong danh sách đã đc check
      }
      else{ 
        return [...pre, id]                                 // Nếu chưa đc check thì thêm vào danh sách checkBox
      }
    })
  }
  
  return (
    <div style={{padding: 32}}>
      <h1>Check Radio</h1>
      {Courses.map(course => (                              
        /** Giải thích code:
            tạo component UI với các value từ Courses.map, 
            onChange: mỗi khi click vào input thì run hàm handleCheckRadio, truyền đối số là course.id cho hàm, hàm này sẽ set value là 1 id cho checkRadio.
            checked: kiểm tra value của checkRadio với course.id, nếu trùng thì mới check.
         */
        <div key={course.id}>                              
          <input
            type="radio"
            onChange={()=>handleCheckRadio(course.id)}
            checked = {course.id === checkRadio}
          >
          </input>
          {course.name}
        </div>
      ))}
      <button onClick={handleRegisterRadio}>Register</button>
      

      <h1>Check Box</h1>
      {Courses.map(course => (
        /** Giải thích code:
            tạo component UI với các value từ Courses.map, 
            onChange: mỗi khi click vào input thì run hàm handleCheckBox, truyền đối số là course.id cho hàm, hàm này sẽ set value là 1 id cho checkBox.
            checked: kiểm tra value của checkBox với course.id, check tất cả những course.id có trong checkbox.
         */
        <div key={course.id}>
          <input
            type="checkbox"
            onChange={() => handleCheckBox(course.id)}
            checked = {checkBox.includes(course.id)}
          >
          </input>
          {course.name}
        </div>
      ))}
      <button onClick={handleRegisterCheckBox}>Register</button>
    </div>
  )
}

export default App;