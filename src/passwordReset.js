import React, {useState, useEffect} from 'react'
import Alert from './components/alert'
import {Link ,redirect} from "react-router-dom"
import Header from './components/header'


async function updatePassword(credentials) {
    return fetch(process.env.REACT_APP_URL_BACK+'verifyToken/password-update', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
    })
      .then(data => data.json())
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
        fetch(process.env.REACT_APP_URL_BACK+'api/auth/password-token', {
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
                fetch(process.env.REACT_APP_URL_BACK+'api/auth/password-update', {
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
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
          return (
          <div className="App-header">
            <Header></Header>
            <div className='content-center '>
                <div className="wrapper-form">
                    <form onSubmit={handleSubmit}>
                        <h2 className='text-center mb-4'>Réinitialiser le mot de passe</h2>
                        <Alert style={style} display={display} >{message}</Alert>
                        <div>
                            <input type="password" className='mt-2' placeholder='Mot de passe' onChange={e => setPassword1(e.target.value)}/>
                        </div>
                        <div>
                            <input type="password" className='mt-2' placeholder='Confirmez le mot de passe' onChange={e => setPassword2(e.target.value)}/>
                        </div>
                        <div>
                            <button className='btn btn-success mt-3' disabled={disable} type="submit">Submit</button>
                        </div>  
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

          