import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Header from './components/header';
import Data from "./datas/data.json";
import BadgesRow from './components/badgesRow';
import Record from './components/records';
import Profil from './profil';


export default function User(props) {
  const [user, setUser] = useState()
  const [date, setDate] = useState(null);
  const userId = useParams().userId
  	useEffect(()=> {
		var myInit = { 
			method: 'Get',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
			}
			fetch(process.env.REACT_APP_URL_BACK+"user/"+userId,myInit)
			.then(res => res.json())
			.then(
			  (response) => {
                    setDate(new Date(response.user.createdAt))
				    setUser(response.user)
			  },
			  (error) => {
				console.log(error)
		  }
			)
  	}, [])

	if(JSON.parse(localStorage.getItem("user")) != null){
		if(userId ===  JSON.parse(localStorage.getItem("user"))._id){
			return <Profil user={user}></Profil>
		}
	}  
	if(user){
		return (
			<div>
                <Header></Header>
                <div>
					<div className='h2'>
					<img className='img-badge' src={`${process.env.REACT_APP_URL}/assets/logos/`+user.logoProfile+`.png`} alt="logo" title="logo"></img>
                    {user.pseudo} 
					</div>
                    <div>Membre depuis {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</div>
                    <div>{user.abonnement.length} Abonnements</div>
                    <div>{user.abonnes.length} Abonnés</div>
                    <div>
                    <BadgesRow user={user} data={Data}></BadgesRow>
                    </div>
                    <Record userId={user._id}></Record>
                </div>
		    </div>
		)
	}
}
