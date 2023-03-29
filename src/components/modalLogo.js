import React, {useEffect, useState} from 'react';
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

  
  function ModalLogo(props) {
    const [currentImage, setCurrentImage] = useState(props.currentLogo)
    const [selected, setSelected] = useState(props.logoProfile)
    const [enableButton, setEnableButton] = useState(false)
    const logos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
   
    const handleClick = (logo)=>{
        if(logo === currentImage){
            setEnableButton(false)
        }else{
            setEnableButton(true)
        }
        setSelected(logo)
    }

    const handleSubmit = ()=>{
         let token = localStorage.getItem("token")

		var myInit = { 
			method: 'POST',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({token, logo : selected})
			}
			fetch(process.env.REACT_APP_URL_BACK+"user/update/logo",myInit)
			.then(res => res.json())
			.then(
			  (response) => {
                setEnableButton(false)
                props.setCurrentLogo(selected);
			  },
			  (error) => {
				error(true)
		    }
		)
    }


    return (
        <>
        <MDBModal show={props.basicModal} setShow={props.setBasicModal} tabIndex='-1' className='text-black'>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle className='text-center'>Choisissez votre logo</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={()=>{props.setBasicModal(false)}}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <div className="d-flex flex-wrap">

                        {logos.map((logoNumber, index)=>{
                            if(logoNumber === selected ){
                                return 	<div key={index} className='border-img-selected'><img className='img-badge' src={`${process.env.REACT_APP_URL}/assets/logos/`+logoNumber+`.png`} alt="logo" title="logo"></img></div>
                            }
                            return <div key={index} onClick={()=>{handleClick(logoNumber)}} className="m-1 img-unselected"><img className='img-badge' src={`${process.env.REACT_APP_URL}/assets/logos/`+logoNumber+`.png`} alt="logo" title="logo"></img></div>
                        })}
                        </div>
                        <div>
                            <button onClick={handleSubmit} disabled={!enableButton} className='btn-grad btn-grad-blue'>Valider</button>
                        </div>
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
        
        </>
    );
}

export default ModalLogo;