import React, {useState} from 'react'
import {Link } from "react-router-dom";
import Alert from './components/alert';
import  { Navigate  } from 'react-router-dom'
import Header from './components/header';
import Input from './components/input';
import ButtonSubmit from './components/buttonSubmit';


const Signup = () => {
    const [lastname, setLastname]= useState("")
    const [firstname, setFirstname]= useState("")
    const [email, setEmail]= useState("")
    const [pseudo, setPseudo]= useState("")
    const [password, setPassword] = useState("");
    const [display, setDisplay] = useState("none")
    const [message, setMessage] = useState("");
    const [style, setStyle] = useState("");

    const handleSubmit = (e)=> {
        e.preventDefault()
        if(lastname && firstname && email && password){
            if(pseudo.length >3){

                if(password.length >= 8){
                    return fetch(process.env.REACT_APP_URL_BACK+'auth/signup', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        firstname : firstname, 
                        lastname : lastname,
                        pseudo : pseudo
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
               setMessage("Votre pseudo doit comporter au moins 4 caractères")
            }
        } else {
            setStyle("danger")
            setDisplay("block")
           setMessage("Veuillez remplir tous les champs")
        }
    }

    if(localStorage.getItem("token") != undefined){
        return <Navigate to='/'  />
    }
    
    return (
        <div >
        <Header></Header>
            <div className='content-center'>
                <div className='wrapper-form'>
                    <form onSubmit={handleSubmit}>
                    <h2 className='mb-4 text-center'>Créez votre compte</h2>
                    <Alert style={style} display={display} >{message}</Alert>
                    <div className={display && style == "success"?  "d-none": "d-block"}>
                    <Input type="text" name="pseudo" action={setPseudo} placeholder="Pseudo"></Input>
                    <Input type="text" name="lastname" action={setLastname} placeholder="Name"></Input>
                    <Input type="text" name="firstname" action={setFirstname} placeholder="Prénom"></Input>
                    <Input type="email" name="email" action={setEmail} placeholder="Email"></Input>
                    <Input type="password" name="password" action={setPassword} placeholder="Mot de passe"></Input>
                    <ButtonSubmit>Créer mon compte</ButtonSubmit>   
                    </div>
                    <div className="mt-3">
                    J'ai déjà un compte, connexion <Link to={"/login"}>ici</Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup