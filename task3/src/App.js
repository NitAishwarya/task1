import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './Button/Button';

function App() 
{
   const [num1, setNum1] = useState(0);
   const [num2, setNum2] = useState(0);

   const numBtn1 = [1, 2, 3];
   const numBtn2 = [4, 5, 6];
   const numBtn3 = [7, 8, 9];
   const numBtn4 = [0];

   const opBtn1 = ['+'];
   const opBtn2 = ['.'];
   const opBtn3 = ['x'];
   const opBtn4 = ['_'];
   const opBtn5 = ['÷'];
   const opBtn6 = ['='];

   const BtnOperationOnClick = (value) =>
   {
      setNum1(num1 + value);
   }

   const BtnNum1 = numBtn1.map((num) => { 
    return <Button Btn = {num} btFun={BtnOperationOnClick} />
    });

   const BtnNum2 = numBtn2.map((num) =>{
    return <Button Btn = {num} btFun={BtnOperationOnClick} />
    } );

   const BtnNum3 = numBtn3.map((num) =>{
    return <Button Btn = {num} btFun={BtnOperationOnClick} />
   } );

   const BtnNum4 = numBtn4.map((num) =>{
    return <Button Btn = {num} btFun={BtnOperationOnClick} />
   } );

   const BtnOp1 = opBtn1.map((op) =>
   {
    return <Button Btn = {op} btFun={BtnOperationOnClick} />
   });

   const BtnOp2 = opBtn2.map((op) =>{
    return <Button Btn = {op} btFun={BtnOperationOnClick} />
   } );

   const BtnOp3 = opBtn3.map((op) =>{
    return <Button Btn = {op} btFun={BtnOperationOnClick} />
   } );

   const BtnOp4 = opBtn4.map((op) =>{
    return <Button Btn = {op} btFun={BtnOperationOnClick} />
   } );

   const BtnOp5 = opBtn5.map((op) =>{
    return <Button Btn = {op} btFun={BtnOperationOnClick} />
   } );

   const BtnOp6 = opBtn6.map((op) =>{
    return <Button Btn = {op} btFun={BtnOperationOnClick} />
   } );

   return(
    <div className="App">
     
     <div id='x1'>

      <div>
        <input type='text' value={num1} onChange={(e)=> setNum1(e.target.value)}/>
      </div>
      
      
      <div> {BtnNum3}{BtnOp3}</div>
      <div> {BtnNum2}{BtnOp4} </div>
      <div> {BtnNum1}{BtnOp5} </div>
      <div> {BtnOp1}{BtnNum4}{BtnOp2}{BtnOp6} </div>
     



     </div>







    </div>
  );
}

export default App;
