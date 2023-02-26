import React from 'react'
import logo from '../images/logo.png'
import Connexion from './connexion'

export default function Header() {

    const handleLogout= ()=> {
        localStorage.clear();
        window.location.reload(false);
    }

    const displayMenu = ()=> {
		const tokenString = localStorage.getItem('token');
		if(tokenString === null){
            return <Connexion/>
        } else{
            return <button onClick={handleLogout} class="btn-trans">Déconnexion</button>
        }

    }

  return (
    <header className="pb-5 px-3 header d-flex justify-content-between align-items-center">
        <img className='logo' src={logo} alt="logo"></img>
        {displayMenu()}
    </header>
  )
}
