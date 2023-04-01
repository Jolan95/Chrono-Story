import React, {useState, useEffect} from 'react';
import Header from './components/header';
import LineUser from './components/lineUser';
import LoaderRing from './components/loaderRing'; 


export default function User() {
  const [users, setUsers] = useState()

  	useEffect(()=> {
		var myInit = { 
			method: 'POST',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify()
			}
			fetch(process.env.REACT_APP_URL_BACK+"user/all",myInit)
			.then(res => res.json())
			.then(
			  	(response) => {
					let newUsers = response.users.filter((user)=>{
						return user._id !== JSON.parse(localStorage.getItem("user"))._id
 					})
					 response.users.forEach((user)=> {
						let point = 0;
						Object.keys(user.highScore).forEach(key => {
							point = point + user.highScore[key]
						});
						user.points = point
					})
					newUsers.sort((a,b) => b.points - a.points)
					setUsers(newUsers)
			  	},
			)
  	}, [])

	const handleChange = (e)=> {
		let newUsers = [...users]
		switch (e.target.value) {
			case 'point':
				newUsers.forEach((user)=> {
					let point = 0;
					Object.keys(user.highScore).forEach(key => {
						point = point + user.highScore[key]
					});
					user.points = point
				})
				newUsers.sort((a,b) => b.points - a.points)
			  break;
			case 'gold':
				newUsers.sort((a,b) => b.badges.gold.length - a.badges.gold.length)
				break;
			case 'medals':
				newUsers.forEach((user)=> {
					let medalsNumber = 0;
					Object.keys(user.badges).forEach(key => {
						medalsNumber = medalsNumber + user.badges[key].length
					});
					user.medals = medalsNumber
				})
				newUsers.sort((a,b) => b.medals - a.medals)
			  break;
			default :
			newUsers.sort((a,b) => b.badges.gold.length - a.badges.gold.length)
		}
		setUsers(newUsers)
	}
	if(users){
		return (
			<>
			<Header></Header>

			<div className='container '>
				<span>Trier par : </span>
				<select className='order-select' name="order" onChange={(value) => handleChange(value)}>
				    <option value="point">Points</option>
				    <option value="gold">Médailles d'or</option>
				    <option value="medals">Médailles</option>
				</select>
				<div className='row my-2 px-3'>
					<div className='col-4'>
            		Pseudo
        			</div>
        			<div className='col-1 '>
					Points
					</div>
        		</div>
	
				{users.map((user, index)=> {
					return (
						<div key={index} >
							<LineUser user={user}></LineUser>
						</div>
					)
				})}
			</div>
			</>	  
		)
	}else {	
		return <>
		<Header></Header>
		<LoaderRing></LoaderRing>
		</>
	}
}
