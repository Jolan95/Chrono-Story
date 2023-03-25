import React, {useState, useEffect} from 'react';
import Header from './components/header';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/user'
import LineUser from './components/lineUser';


// function getMyFollower(userId){
// 	// const userId = JSON.parse(localStorage.getItem("user"))._id
//     var myInit = { 
// 		method: 'GET',
//         mode: 'cors',
//         headers: { 'Content-Type': 'application/json' },
//     }
//     fetch(process.env.REACT_APP_URL_BACK+"user/"+userId ,myInit)
//     .then(res => res.json())
//     .then(
//       (response) => {
//         // console.log("hello")
//         // console.log(response.user)
//         //  return response.user.abonnement
//       },
//       (error) => {
//         // console.log(error)
//     })
// }

export default function User() {
  const [users, setUsers] = useState()

useSelector((store) => {
	console.log(store.userStore.user)
})

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
					// console.log(response.users)
					setUsers(response.users)
			  	},
			  	(error) => {
					// console.log(error)
		  }
			)
  	}, [])

	if(users){
		return (
			<>
			<Header></Header>
			<div className='container '>
				<div className='row mb-2 px-3'>
					<div className='col-3'>
            		Pseudo
        			</div>
        			<div className='col-2'>
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
	
		  </>
		)

	}
}
