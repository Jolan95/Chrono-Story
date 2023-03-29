import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Navigate } from 'react-router-dom';

export default function Dropdown() {

    const user = JSON.parse(localStorage.getItem("user"));
    const name = user.pseudo
	const initial = name



     //Needs to be changed
    const handleLogout= ()=> {
        localStorage.clear();
        window.location.href= process.env.REACT_APP_URL
    }

  return (
    <>
    <div className="dropdown d-md-block d-none">
      	<div className="btn-trans no-radius ">{name}</div>
      	<div className="dropdown-content">
        	<Link to={`/user/${user._id}`}>Mon Profil</Link>
        	<Link to="/users" >Joueurs</Link>
        	<div onClick={handleLogout}>Déconnexion</div>
      	</div>
    </div>
    <div className="dropdown d-md-none">
      	<div className="btn-trans radius90 full-center">{initial}</div>
      	<div className="dropdown-content">
      	  	<Link to={`/user/${user._id}`}>
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list-ol" viewBox="0 0 16 16">
					<path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
					<path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"/>
				</svg>
			</Link>
      	  	<Link to="/users">
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
  					<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
				</svg>
			</Link>
      	  	<div onClick={handleLogout} className="full-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="white bi bi-power" viewBox="0 0 16 16">
  					<path d="M7.5 1v7h1V1h-1z"/>
  					<path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
				</svg>
			</div>
      	</div>
    </div>
  </>
  )
}


