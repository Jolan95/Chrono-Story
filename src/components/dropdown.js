import React from 'react'
import {Link} from 'react-router-dom'

export default function Dropdown() {

    const user = JSON.parse(localStorage.getItem("user"));
    const name = user.firstname+" "+user.lastname
    let initial =  user.lastname.charAt(0)+"."+user.firstname.charAt(0) ;
    console.log(initial)
    initial = initial.toUpperCase();

    const handleLogout= ()=> {
        localStorage.clear();
        window.location.reload(false);
    }
  return (
<div className="dropdown">
  <div className="btn-trans no-radius d-none d-md-block">{name}</div>
  <div className="btn-trans radius90 d-md-none">{initial}</div>
  <div className="dropdown-content">
    {/* <Link to="/records">Records</Link> */}
    <div onClick={handleLogout}>Déconnexion</div>
  </div>
</div>
  )
}


