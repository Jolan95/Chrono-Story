import React, {useState, useEffect} from 'react';
import Header from './components/header';
import { Link } from 'react-router-dom';
import LineUser from './components/lineUser';

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
					<div className='container'>
						<LineUser user={user}></LineUser>
					</div>
				)
			})}
		  </>
		)

	}
}
