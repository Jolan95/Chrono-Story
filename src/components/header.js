import React from 'react'
import logo from '../images/logo.png'
import Connexion from './connexion'
import Dropdown from './dropdown'

export default function Header() {



    const displayMenu = ()=> {
		const tokenString = localStorage.getItem('token');
		if(tokenString === null){
            return <Connexion/>
        } else{
            return <Dropdown/>
        }

    }

  return (
    <header className="px-3 header d-flex justify-content-between align-items-center">
        <img className='logo' src={logo} alt="logo"></img>
        {displayMenu()}
    </header>
  )
}
