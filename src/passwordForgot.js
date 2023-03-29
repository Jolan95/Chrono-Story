import React, { useState, useEffect } from 'react'
import {  Link } from "react-router-dom";
import Alert from './components/alert';
import  { Navigate  } from 'react-router-dom'
import Input from './components/input';
import ButtonSubmit from './components/buttonSubmit';


async function passwordForgot(email) {
    return fetch(process.env.REACT_APP_URL_BACK+'password/forgot', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(email)
})
.then(data => data.json())
.catch(err => console.log(err))

}

export default function PasswordForgot() {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [display, setDisplay] = useState("none")
    const [style, setStyle] = useState("")
    
    const handleSubmit = async e => {
        e.preventDefault();
     const response = await passwordForgot({
       email
     });
     setDisplay("block")
     if(response.ok){
         setStyle("success")
         setMessage("Un mail vous a été envoyé afin de réinitialiser votre mot de passe")
     } else {
         setStyle("danger")
         setMessage(response.message)
     }
 };

    return (
    <div className='content-center pt-5'>
        <div className="wrapper-form">
            <form onSubmit={handleSubmit}>
                <h2 className='text-center mb-4'>Envoi mail de vérifiaction</h2>
                <Alert style={style} display={display} >{message}</Alert>
                <Input type="email" name="email" action={setEmail} placeholder="Email"></Input>
                <ButtonSubmit>Réintialiser le mot de passe</ButtonSubmit>   
                <div className='pt-4'>
                    <Link  to="/login">Connexion</Link>
                </div>
            </form>
        </div>
    </div>

  )
}
