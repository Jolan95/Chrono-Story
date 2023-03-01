import React from 'react'
import {Link} from 'react-router-dom'

export default function Dropdown() {

    const user = JSON.parse(localStorage.getItem("user"));
    const name = user.firstname+" "+user.lastname
    const handleLogout= ()=> {
        localStorage.clear();
        window.location.reload(false);
    }
  return (
<div className="dropdown">
  <div className="btn-trans no-radius">{name}</div>
  <div className="dropdown-content">
    <Link to="/records">Records</Link>
    <div onClick={handleLogout}>Déconnexion</div>
  </div>
</div>
  )
}


