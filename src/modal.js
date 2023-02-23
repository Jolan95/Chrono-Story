import React from 'react';
import {Link} from "react-router-dom";

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
  
  function Modal(props) {
       
    return (
        <>
        <MDBModal show={props.basicModal} setShow={props.setBasicModal} tabIndex='-1' className='text-black'>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>{props.children}</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={props.toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>Score : {props.score}</MDBModalBody>
                    <MDBModalFooter>
                            <Link to={"/"}><button className='btn btn-danger'>Back to Menu</button></Link>
                            <button onClick={props.actionReset} className='btn btn-success'>Restart</button>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
        
        </>
    );
}

export default Modal;