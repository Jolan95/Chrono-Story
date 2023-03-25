import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Header from './components/header';
import Data from "./datas/data.json"


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

    const displayBadges = ()=> {
        let badge= []
         let gamesUsed = [];
         let badgesColors = ["gold", "silver", "bronze"]
         badgesColors.forEach((color) => {

            badge.push(<div>{color}</div>)
            Object.values(user.badges[color]).map((game)=> {
                gamesUsed.push(game)
                badge.push(<img className='img-badge' src={`${process.env.REACT_APP_URL}/assets/badges/`+game+`_`+color+`.png`} alt="cinema" title={"Badge "+color}></img>)
            }); 
         })
         Data.forEach((data) => {
            if(!gamesUsed.includes(data.db)){
                badge.push(<img className='img-badge' src={`${process.env.REACT_APP_URL}/assets/badges/`+data.db+`_none.png`} alt={data.name} title={"Badge "+data.name}></img>)
            }
         })
         return badge
    }
	if(user){
		return (
			<div>
                <Header></Header>
                <div key={user._id}>
                    {user.lastname} {user.firstname} 
                    <div>Membre depuis {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</div>
                    <div>{user.abonnement.length} Abonnements</div>
                    <div>{user.abonnes.length} Abonnés</div>
                    <div>
                    {displayBadges()}
                    </div>
                </div>
		    </div>
		)
	}
}
