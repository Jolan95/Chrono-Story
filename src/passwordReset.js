import React, {useState, useEffect} from 'react'
import Alert from './components/alert'
import {Link ,redirect} from "react-router-dom"
import Header from './components/header'
import Input from './components/input'
import ButtonSubmit from './components/buttonSubmit'


async function updatePassword(credentials) {
    return fetch(process.env.REACT_APP_URL_BACK+'verifyToken/password-update', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
    })
      .then(data => data.json())
      .catch(err => console.log(err))

   }

export default function PasswordReset() {
    
    const queryParameters = new URLSearchParams(window.location.search)
    const token = queryParameters.get("tokenPassword")
    const [style, setStyle]= useState("danger")
    const [message, setMessage] = useState("")
    const [display, setDisplay] = useState("none")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [disable, setDisable] = useState(false)
  


    useEffect(() => {
        fetch(process.env.REACT_APP_URL_BACK+'password/token', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({token})
        })
        .then(data => data.json()) 
        .then((result)=> {
            if(result.ok){
                setIsLoaded(true);
            } else {
                setError(result)
            }
        },
        (error) => {
            setIsLoaded(true);
            setError("Erreur lancée");
          }
        )
    }, [])
    
    const handleSubmit = (e)=> {
        e.preventDefault()
        if (password1 === password2){
            if(password1.length > 7){
                fetch(process.env.REACT_APP_URL_BACK+'password/update', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({password1, password2, token})
                })
                .then(data => data.json()) 
                .then((result)=> {
                    setDisplay("block")
                    setStyle("success")
                    setMessage(result.message);
                    setDisable(true)
                },
                (result) => {
                    setMessage(result.message)
                    setDisplay("block")
                  }
                )
            }else {
                setMessage("Le mot de passe doit contenir au moins 8 caractères.")
                setDisplay("block")
            }
        }else {
            setMessage("Les 2 mots de passes doivent être identiques.")
            setDisplay("block")
        }
    }

    if (error) {
        return <div>Erreur: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>
            <Header></Header>
            <div className="d-flex justify-content-center">
            <div className="lds-dual-ring"></div>
            </div>
        </div>;
      } else {
          return (
          <div>
            <Header></Header>
            <div className='content-center'>
                <div className="wrapper-form">
                    <form onSubmit={handleSubmit}>
                        <h2 className='text-center mb-4'>Réinitialiser le mot de passe</h2>
                        <Alert style={style} display={display} >{message}</Alert>
                        <Input type="password" name="password" action={setPassword1} placeholder="Mot de passe"></Input>
                        <Input type="password" name="password2" action={setPassword2} placeholder="Confirmez votre mot de passe"></Input>
                        <ButtonSubmit disabled={disable}>Changer le mot de passe</ButtonSubmit>  
                        <div className="pt-2">
                            <Link to="/login">Connexion</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            
        );
      }
}

          