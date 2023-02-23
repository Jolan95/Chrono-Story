import React, {useState} from 'react'

const Signup = () => {
    const [lastname, setLastname]= useState("")
    const [firstname, setFirstname]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")
    const [messageServer, setMessageServer] = useState("");

    const handleSubmit = (e)=> {
        e.preventDefault()
        if(lastname && firstname && email && password){
            if(password.length >= 8){
                return fetch('http://localhost:3000/api/auth/signup', {
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
                .then(result => setMessageServer(result.message))
                .catch(error => {
                    setMessageServer("Une erreur s'est produite, veuillez réessayer plus tard.");
                })
            } else {
                setMessageServer("Votre mot de passe doit contenir au moins 8 caractères")
            }
        } else {
           setMessageServer("Veuillez remplir tous les champs")
        }
    }
    
    return (
        <div>
            Signup
            <form  onSubmit={handleSubmit}>
            {messageServer}
            <div>
              <input type="text"  onChange={e => setLastname(e.target.value)} placeholder="Nom"/>
            </div>
            <div>
              <input type="text"  onChange={e => setFirstname(e.target.value)} placeholder="Prénom"/>
            </div>
            <div>
              <input type="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="Email"/>
            </div>
            <div>
              <input type="password" name="password" onChange={e => setPassword(e.target.value)}  placeholder="Mot de passe"/>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
            </form>
            
        </div>
    )
}

export default Signup