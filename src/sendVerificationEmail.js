import React, { useState, useEffect } from 'react'
import { redirect, Link } from "react-router-dom";
import Alert from './components/alert';


async function loginUser(credentials) {
    // return fetch('https://chrono-back.herokuapp.com/api/auth/login', {
    return fetch('http://localhost:5000/verifyToken/emailVerification', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
    })
      .then(data => data.json())
      .catch((error) => console.log(error))
   }


const VerificationEmail = (props) => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [display, setDisplay] = useState("none")
    const [style, setStyle] = useState("")
       
    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
          email
        });
        setDisplay("block")
        if(response.ok){
            setStyle("success")
            setMessage("Un nouveau mail vous a été envoyé")
        } else {
            setStyle("danger")
            setMessage(response.message)
        }
    };

    return (
        <div className="App-header pt-5">
            <div className='content-center '>
                <div className="wrapper-form">
                    <form onSubmit={handleSubmit}>
                        <h2 className='text-center mb-4'>Envoi mail de vérifiaction</h2>
                        <Alert style={style} display={display} >{message}</Alert>
                        <div>
                            <input type="email" className='mt-2' placeholder='E-mail' onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <button className='btn btn-success mt-3' type="submit">Submit</button>
                        </div>  
                        <div className='pt-4'>
                            <Link  to="/login">Connexion</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default VerificationEmail;