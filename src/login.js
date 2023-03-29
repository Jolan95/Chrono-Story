import React, { useState, useEffect } from 'react'
import {redirect, Link, Navigate } from "react-router-dom";
import Alert from './components/alert';
import Header from './components/header';
import Input from './components/input';
import ButtonSubmit from './components/buttonSubmit';
import { useDispatch } from 'react-redux'
import { connexion } from './store/user'


async function loginUser(credentials) {
    return fetch(process.env.REACT_APP_URL_BACK+'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
})
.then(data => data.json())
.catch(err => console.log(err))
}


const Login = (props) => {
    
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [display, setDisplay] = useState("none")
    
    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
          email,
          password
        });
        if(response.token !== undefined){
            localStorage.setItem('token', JSON.stringify(response.token));
            localStorage.setItem('user', JSON.stringify(response.user))
            dispatch(connexion(response.user));
            redirect("/")
            props.setToken(props.getToken())
        } else {
            if(response.needValidation){
                const msg = <div>{response.message}<div><Link to="/verificationEmail">Renvoyer l'email de vérification</Link></div></div>
                setMessage(msg)
                setDisplay("block")
                
            }else{
                setMessage(response.message)
                setDisplay("block")
            }
        }
    };
    useEffect(() => {
        if (props.token){
            return redirect("/");
        }
    },[props.token, props.setToken]);
    
    
    if(localStorage.getItem("token") != undefined){
        return <Navigate to='/'  />
    }
    
    
    return (
        <div>
            <Header></Header>
            <div className='content-center '>
                <div className="wrapper-form">
                    <form onSubmit={handleSubmit}>
                        <h2 className='text-center mb-4'>Authentification</h2>
                        <Alert style="danger" display={display} >{message}</Alert>
                        <Input type="email" name="email" action={setEmail} placeholder="Email"></Input>
                        <Input type="password" name="password" action={setPassword} placeholder="Mot de passe"></Input>
                        <ButtonSubmit>Connexion</ButtonSubmit>   
                        <div className="pt-3">
                            Je n'ai pas de compte?<Link to={"/signup"}> Inscription</Link>
                            <div><Link to={"/passwordForgot"}> Mot de passe oublié ?</Link></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login