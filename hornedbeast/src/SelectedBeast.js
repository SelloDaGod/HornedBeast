import react from 'react'
import { Modal, ModalBody } from 'react-bootstrap'
import { useState } from 'react';

function Selectedbeast(props) {
    const handleClose =() => props.setdisplaySelectedBeast(false)
    
    

    console.log("props", props)
    return (
        <Modal show={props.displaySelectedBeast} onHide={handleClose}>
            <Modal.Title> {props.clickedbeast.title}</Modal.Title>
            {props.clickedbeast.description}
            <img src={props.clickedbeast.image_url} />
            <Modal.Footer>
                <button onClick={handleClose}>Close</button>
            </Modal.Footer>
        </Modal>
    );
}
export default Selectedbeast