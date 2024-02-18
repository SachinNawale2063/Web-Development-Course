// import logo from './logo.svg';
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';

function App() {

  const [value, setValue] = useState(0)


  return (
    <div className="App">

        <Navbar logoText="Code with Sachuu"/>
        Hi Guys sachin here!!!!

        <div className='value'>
          {value}
        </div>
        <button onClick={()=>{setValue(value + 1)}}>
          ADD
        </button>
        <button onClick={()=>{setValue(value - 1)}}>
          Subtract
        </button>
        <button onClick={()=>{setValue(0)}}>
          Reset
        </button>
        
    </div>
  );
}

export default App;
