/* eslint-disable no-unused-vars */
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Sachin")
  const [form, setForm] = useState({email:"", phone:""})

  const handleClick = () =>{
    alert("Hey I am clicked")
  }

  const handleMouseOver = () =>{
    alert("I am a mouse over the red div")
  }

  const handeleChange = async (e) => {
    // setName(e.target.value)
    await setForm({...form, [e.target.name]:e.target.value})
    console.log(form);
  }

  return (
    <>

      <div className="btn">
        <button onClick={handleClick}>Click me</button>
      </div>

      <div className="red" onMouseOver={handleMouseOver}>
        I am a Red
      </div>

      <input type="text" value={name} onChange={handeleChange}/>


      <input type="text" name='email' value={form.email} onChange={handeleChange}/>
      <input type="text" name='phone' value={form.phone} onChange={handeleChange}/>
      
    </>
  )
}

export default App
