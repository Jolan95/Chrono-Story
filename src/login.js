import React, { useState, useEffect } from 'react'
import { redirect, Link } from "react-router-dom";
import Alert from './components/alert';


async function loginUser(credentials) {
    // return fetch('https://chrono-back.herokuapp.com/api/auth/login', {
    return fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


const Login = (props) => {
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
            window.location.href = "http://localhost:3001/"
            // window.location.href = "https://chrono-story.netlify.app/"
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

    return (
        <div className="App-header pt-5">
            <div className='content-center '>
                <div className="wrapper-form">
                    <form onSubmit={handleSubmit}>
                        <h2 className='text-center mb-4'>Authentification</h2>
                        <Alert style="danger" display={display} >{message}</Alert>
                        <div>
                            <input type="email" className='mt-2' placeholder='E-mail' onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div>  
                            <input type="password" className='my-2' placeholder='Mot de passe' onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div>
                            <button className='btn btn-success mt-3' type="submit">Submit</button>
                        </div>
                        <div className="pt-3">
                            Je n'ai pas encore de compte?<Link to={"/signup"}> Inscription</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login