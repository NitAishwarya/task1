import logo from './logo.svg';
import './App.css';
import Button from './Button/Button';
import { useState } from 'react';

function App() {
  const [num1 , setNum1] = useState(0);
  const [num2 , setNum2] = useState(0);

  const [cal , setCal] = useState(0);

  const addVal = () =>
  {
      setCal(parseInt(num1)+parseInt(num2));
  }

  const subVal = () =>
  {
      setCal(parseInt(num1)-parseInt(num2));
  }

  const mulVal = () =>
  {
      setCal(parseInt(num1)*parseInt(num2));
  }

  const divVal = () =>
  {
      setCal(parseInt(num1)/parseInt(num2));
  }



  //--------------Button ---------------
  const numBtn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const BtnNum = numBtn.map((num) => <Button btn = {num} />);

  const opBtn = ['+', '-', '*', '/' , '=']
  const BtnOp = opBtn.map((op) => <Button btn = {op}/>);
  return (
    <div className="App">
      <br/>
     <div> 
      <input type='number' value={num1} onChange={(e) => setNum1(e.target.value)} />
     </div>
     <br/>
     <div> 
      <input type='number' value={num2} onChange={(e) => setNum2(e.target.value)} />
     </div>
     <br/>
     <div> 
      <button onClick={() => addVal()}> ADD </button> 
      <button onClick={() => subVal()}> SUB </button> 
      <button onClick={() => mulVal()}> MUL </button> 
      <button onClick={() => divVal()}> DIV </button> 
     </div>
     
     <br/>
     <div>
           
           <span> Calculation : {cal} </span>

     </div>
     

     <br/> <br/>
    {BtnNum}
    <br/>

    {BtnOp}
    </div>
  );
}

export default App;
