import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ColorSchemesExample from '../Component/Header/Header';

 const StaticExample = ({login}) =>
{
    const [isLoading , setIsLoading] = useState('Sir');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    
    useEffect(()=>
    { 

        setTimeout(() => {

            setIsLoading('Everyone');
            
        }, 3000);

    },[])

  return (

    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
        
    <Button variant="warning" onClick={handleShow}>
     Click Here
    </Button>
    <ColorSchemesExample bg_name={login === 'user' ? 'success' : 'primary'} />
   
            <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p> Hello !!!! </p>
            <p> Good AfterNoon {isLoading} </p>
            
        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
        </Modal>

      
    </div>
  );
}

export default StaticExample;