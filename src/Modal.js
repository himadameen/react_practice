import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';

const ModalComp = () => {
    const [modalStatus, setModalStatus] = useState(false);
    const [classUpdate, setClassUpdate] = useState(false);

    const handleClose = () => {
        setModalStatus(false);
    }
    const showModal = () => {
        setModalStatus(true);
    }
    return(
        <>

            <div className={classUpdate ? 'my-div-temp' : 'my-div'} style={{width: '200px'}}>test Color</div>
            <Button onClick={() => setClassUpdate(!classUpdate)}>Change Class</Button>
        <br></br><br></br>
        <br></br><br></br>

        <Button onClick={showModal}>Show Modal</Button>

        <Modal
        show={modalStatus}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={handleClose}>Understood</Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default ModalComp;