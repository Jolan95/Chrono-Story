import React, { useState, useEffect } from 'react'
import { redirect } from "react-router-dom";


async function loginUser(credentials) {
    return fetch('http://localhost:3000/api/auth/login', {
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

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
          email,
          password
        });
        localStorage.setItem('token', JSON.stringify(response.token));
        localStorage.setItem('user', JSON.stringify(response.user))
        props.setToken(props.getToken())
        window.location.href = "http://localhost:3001/"
    };
    
    useEffect(() => {
        if (props.token){
            return redirect("/");
        }
    },[props.token, props.setToken]);

      

    return (
        <div>
            Login
            <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
        </div>
    )
}

export default Login