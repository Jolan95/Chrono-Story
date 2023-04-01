import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Header from './components/header';
import Data from "./datas/data.json";
import BadgesRow from './components/badgesRow';
import Record from './components/records';
import Profil from './profil';
import Follow from './components/follow';
import ModalListUser from './components/modalListUser'


export default function User(props) {
  const [user, setUser] = useState()
  const [date, setDate] = useState(null);
  const [modalFollower, setModalFollower] = useState(false)
  const [modalFollow, setModalFollow] = useState(false)
  const [follower, setFollower] = useState([])
  const [follow, setFollow] = useState([])
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
					setFollower(response.user.abonnes)
					setFollow(response.user.abonnement)
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
				<h1 className='d-none'>Utilisateur {user.pseudo}</h1>
                <div className='container'>
                    <div className='d-lg-flex justify-content-between mb-3'>
                        <div>
                            <div className='h1 d-flex align-items-center mb-2'>
								<img className='img-badge' src={`${process.env.REACT_APP_URL}/assets/logos/`+user.logoProfile+`.png`} alt="logo" title="logo"></img>
                    			<h2 className='h1 ml-2'>{user.pseudo}</h2> 
                            </div>
                            <div>Membre depuis {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</div>
                            <div>{points()} points</div>
                        </div>
                        <div>
                            <Follow actionFollow={setModalFollow} actionFollower={setModalFollower} follows={user.abonnement} followers={user.abonnes } ></Follow>
                        </div>
                    </div>    
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
				<ModalListUser users={follow} setModalList={setModalFollow} modalList={modalFollow}>Abonnements de {user.pseudo}</ModalListUser>
                <ModalListUser users={follower} setModalList={setModalFollower} modalList={modalFollower}>Abonnés de {user.pseudo}</ModalListUser>
		    </div>
		)
	}
}
