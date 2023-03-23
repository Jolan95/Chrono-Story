import React, {useState, useEffect} from 'react';
import Header from './components/header';
import { Link } from 'react-router-dom';
import LineUser from './components/lineUser';


function getMyFollower(userId){
    // const userId = JSON.parse(localStorage.getItem("user"))._id
    var myInit = { 
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(process.env.REACT_APP_URL_BACK+"user/"+userId ,myInit)
    .then(res => res.json())
    .then(
      (response) => {
        console.log("hello")
        console.log(response.user)
        //  return response.user.abonnement
      },
      (error) => {
        console.log(error)
    })
}

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
					console.log(response.users)
					setUsers(response.users)
			  	},
			  	(error) => {
					console.log(error)
		  }
			)
  	}, [])

	if(users){
		return (
			<>
			<Header></Header>
			{users.map((user)=> {
				return (
					<div key={user._id} className='container'>
						<LineUser user={user}></LineUser>
					</div>
				)
			})}
		  </>
		)

	}
}
