import React, {useState, useEffect} from 'react';
import Header from './components/header';
import LineUser from './components/lineUser';
import ErrorBoundary from './catch';


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
			)
  	}, [])

	if(users){
		return (
			<ErrorBoundary message="USERS">
			<Header></Header>
			<div className='container '>
				<div className='row mb-2 px-3'>
					<div className='col-4'>
            		Pseudo
        			</div>
        			<div className='col-2 '>
					👑
					</div>
        			<div className='col-3'>
        			</div>
        			<div className='col-2'>
        			</div>
        		</div>
	
				{users.map((user)=> {
					return (
						<div key={user._id} >
							<LineUser user={user}></LineUser>
						</div>
					)
				})}
			</div>
			</ErrorBoundary>
		  
		)

	}
}
