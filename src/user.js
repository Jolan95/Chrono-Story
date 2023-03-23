import React, {useState, useEffect} from 'react'
import { useParams, Link} from "react-router-dom";
import Header from './components/header';

export default function User(props) {
  const [user, setUser] = useState()
  const [date, setDate] = useState(null);
  const userId = useParams().userId
  	useEffect(()=> {
		var myInit = { 
			method: 'Get',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify()
			}
			fetch(process.env.REACT_APP_URL_BACK+"user/"+userId,myInit)
			.then(res => res.json())
			.then(
			  (response) => {
                    console.log(response.user)
                    setDate(new Date(response.user.createdAt))
				  setUser(response.user)
			  },
			  (error) => {
				console.log(error)
		  }
			)
  	}, [])

	if(user){
		return (
			<div>
                <Header></Header>
                <div key={user._id}>
                {user.lastname} {user.firstname} 
                <div>Membre depuis {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</div>
                </div>
		    </div>
		)

	}

    
}
