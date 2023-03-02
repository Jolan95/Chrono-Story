import React, {useState} from 'react'
import {Link } from "react-router-dom";
import Alert from './components/alert';


const Signup = () => {
    const [lastname, setLastname]= useState("")
    const [firstname, setFirstname]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("");
    const [display, setDisplay] = useState("none")
    const [message, setMessage] = useState("");
    const [style, setStyle] = useState("");


    const handleSubmit = (e)=> {
        e.preventDefault()
        if(lastname && firstname && email && password){
            if(password.length >= 8){
                // return fetch('https://chrono-back.herokuapp.com/api/auth/signup', {
                return fetch('http://localhost:5000/api/auth/signup', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        firstname : firstname, 
                        lastname : lastname
                    })
                })
                .then(res => res.json())
                .then(
                    (response) => {
                        setDisplay("block")
                        setMessage(response.message)
                        if(response.ok){

                            const msg = <div>{response.message}<div><Link to="/verificationEmail">Renvoyer l'email de vérification</Link></div></div>
                            setStyle("success")
                            setMessage(msg)
                        } else{
                            setStyle("danger")
                        }
                    },
                    (error) => {
                        console.log(error)
                    }
                )
            } else {
                setStyle("danger")
                setDisplay("block")
                setMessage("Votre mot de passe doit contenir au moins 8 caractères")
            }
        } else {
            setStyle("danger")
            setDisplay("block")
           setMessage("Veuillez remplir tous les champs")
        }
    }
    
    return (
        <div className="App-header pt-3">
            <div className='content-center'>
                <div className='wrapper-form'>
                    <form onSubmit={handleSubmit}>
                    <h2 className='mb-4 text-center'>Créez votre compte</h2>
                    <Alert style={style} display={display} >{message}</Alert>
                    
                    <div>
                      <input type="text" className='mt-'  onChange={e => setLastname(e.target.value)} placeholder="Nom"/>
                    </div>
                    <div>
                      <input type="text" className='mt-2'  onChange={e => setFirstname(e.target.value)} placeholder="Prénom"/>
                    </div>
                    <div>
                      <input type="email" name="email"className='mt-2' onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                    </div>
                    <div>
                      <input type="password" name="password" className='mt-2' onChange={e => setPassword(e.target.value)}  placeholder="Mot de passe"/>
                    </div>
                    <div>
                      <button type="submit" className='btn btn-success my-3'>Submit</button>
                    </div>
                    <div>
                    J'ai déjà un compte, connexion <Link to={"/login"}>ici</Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup