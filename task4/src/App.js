import logo from './logo.svg';
import { Button } from "react-bootstrap";
import './App.css';
import Main from './Component/Main/Main';
import Header from './Component/Header/Header';
import { Modal } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StaticExample from './Component/Header/Header';
import Module from './Module/Module'
import { useState } from 'react';




function App() 
{
   const [login, setLogin] = useState("user");

   const userClick = () => 
   {
      setTimeout(() => {
         
      }, 500);
      setLogin('user'); 
   }
 
    

     
   return(
      <div>
                <Module login={login}/>
                <Button variant='primary'  onClick={userClick}> user </Button> 
                <Button variant='success'    onClick={() => setLogin("admin")}> admin </Button>
                 <br/> 
                
                <br/>
                <Header />
               

               
               
      </div>
     
   )
   
}

export default App;
