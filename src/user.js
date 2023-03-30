import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Header from './components/header';
import Data from "./datas/data.json";
import BadgesRow from './components/badgesRow';
import Record from './components/records';
import Profil from './profil';
import Follow from './components/follow';


export default function User(props) {
  const [user, setUser] = useState()
  const [date, setDate] = useState(null);
  const userId = useParams().userId

  const points = ()=> {
	let point = 0;
	Object.keys(user.highScore).forEach(key => {
		point = point + user.highScore[key]
	});
	return point;
}
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
                <div className='container'>
					<div className="d-flex justify-content-between">
						<div className='d-flex align-items-center'>
							<img className='img-badge' src={`${process.env.REACT_APP_URL}/assets/logos/`+user.logoProfile+`.png`} alt="logo" title="logo"></img>
                    		<h1 className='h1 ml-2'>{user.pseudo}</h1> 
						</div>
						<div>
                    	    <Follow follows={user.abonnement} followers={user.abonnes} ></Follow>
						</div>
					</div>
					<div >Membre depuis {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</div>
					<div className='mb-3'>{points()} points</div>
				</div>	
				<div className='bg-white'>
					<div className='container py-3'>
					<h2 className="text-black font-weight-bold">Records :</h2>
                    <Record userId={user._id}></Record>
					</div>
				</div>
                <div className='container mt-3'>
                    <BadgesRow user={user} data={Data}></BadgesRow>
                </div>
		    </div>
		)
	}
}
