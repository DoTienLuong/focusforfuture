import {useState, useMemo} from 'react'

const App = () => {
  const [name, setName] = useState('');
  const [point, setPoint] = useState('');
  const [listSV, setListSV] = useState([]);

  const handleSubmit = () => {
    setListSV([...listSV, {
      name, 
      point: +point
    }])
  }

  const sumPoint = useMemo(()=>{
    listSV.reduce((sum, cur)=>{
      console.log("Tính toán lại")
      return sum + cur.point;
    },
    0)
  },[listSV])
  // useMemo dùng cho hàm sử dụng logic, nếu như logic chưa cần thay đổi thì ko cần gọi lại làm

  return(
    <div style={{padding: '10px 32px'}}>
      <input 
        value={name}
        placeholder='Input Name'
        onChange={e=> setName(e.target.value)}
      />
      <br/>
      <input 
        value={point}
        placeholder='Input point'
        onChange={e=> setPoint(e.target.value)}
      />
      <br/>
      <button
        onClick={handleSubmit}
      >
        Add
      </button>
      <br/>
      Total: {sumPoint}
      <ul>
        {listSV.map((sv, index)=>(
          <li key={index}>{sv.name} - {sv.point}</li>
        ))}
      </ul>
    </div>
  )

}

export default App;