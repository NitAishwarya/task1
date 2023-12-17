import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [num1,setnum1] = useState(0);
  const [num2,setnum2] = useState(0);
   
  let [add,setAdd] = useState(0);
  const addValue =() =>
  {
    setAdd(parseInt(num1) + parseInt(num2));
    console.log('add',add);
   
  }

  const subValue = () =>
  {
    setAdd(parseInt(num1) - parseInt(num2));
    console.log('sub',add);
  }

  const mulValue = () =>
  {
    setAdd(parseInt(num1)*parseInt(num2));
    console.log('mul',add)
  }

  const divValue = () =>
  {
    setAdd(parseInt(num1)/parseInt(num2));
    console.log('div',add);
  }

  
  return (
    <div className="App">

     <div> 
       <input type = 'number' onChange={(e)=>setnum1(e.target.value)} value={num1} />

       <input type='number' onChange={(e)=>setnum2(e.target.value)} value={num2} />
     </div>
     <br/>
       <div> <button onClick={() => addValue()}> ADD </button> </div>
       <div> <button onClick={() => subValue()}> SUB </button> </div>
       <div> <button onClick={() => mulValue()}> MUL </button> </div>
       <div> <button onClick={() => divValue()}> DIV </button> </div>
       <br/>
     <div>
      <span> Answer : {add} </span>
     </div>
    
    </div>
  );
}

export default App;
