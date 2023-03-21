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
  } from 'mdb-react-ui-kit';
  
  function ModalInfo(props) {
       
    return (
        <>
        <MDBModal show={props.basicModal} setShow={props.setBasicModal} tabIndex='-1' className='text-black'>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle className='text-center'>Infos</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={props.hideModal}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <div> 
                            {props.description}
                        </div>
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
        
        </>
    );
}

export default ModalInfo;