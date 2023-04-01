import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
  } from 'mdb-react-ui-kit';

  
  function ModalListUser(props) {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        var myInit = { 
            method: 'POST',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({users : props.users})
        }
		fetch(process.env.REACT_APP_URL_BACK+"user/get-users",myInit)
		.then(res => res.json())
		.then((response) => { 
            setUsers(response.users)
		  }
        )
        .catch((err)=> console.log(err)) 

    }, [])
       
        return (
        <>
        <MDBModal show={props.modalList} setShow={props.setModalList} tabIndex='-1' className='text-black'>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle className='text-center'>{props.children}</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={()=>{props.setModalList(false)}}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <div className=" flex-wrap">
                        {users?.map((user, index)=>{
                            return (<div key={index} className="m-1">
                                <Link to={`/user/${user._id}`}>
                                <img className='img-badge-small mr-2' src={`${process.env.REACT_APP_URL}/assets/logos/`+user.logoProfile+`.png`} alt="logo" title="logo"></img>
                                <span className='font-weight-bold'>{user.pseudo}</span>
                                </Link>
                            </div>
                            )
                        })}
                        </div>
                        <div>
                        </div>
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
        
        </>
    );   
}

export default ModalListUser;