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
                        <MDBModalTitle className='text-center'>{props.children}</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={props.toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <div> 
                            <div className='text-center'>SCORE : {props.score}</div>
                            <div className=' d-flex justify-content-between pt-3 '>
                                <Link to={"/"}><button className='btn btn-danger'>Retour au menu</button></Link>
                                <button onClick={props.actionReset} className='btn btn-success'>Rejouer</button>
                            </div>
                        </div>
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
        
        </>
    );
}

export default Modal;