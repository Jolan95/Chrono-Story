import React, {useEffect, useState} from 'react'
import Header from './components/header'
import Follow from './components/follow'
import BadgesRow from './components/badgesRow'
import RecordsDisplay from './components/recordsDisplay'
import Data from "./datas/data";
import ModalLogo from "./components/modalLogo"
import ModalListUser from './components/modalListUser'

export default function Profil() {
    // const [error, setError]= useState(false) 
    const [displayModal, setDisplayModal] = useState(false)
    const [CurrentLogo, setCurrentLogo] = useState()
    const [user, setUser] = useState(false)
    const [modalFollower, setModalFollower] = useState(false)
    const [modalFollow, setModalFollow] = useState(false)
    const [follower, setFollower] = useState([])
    const [follow, setFollow] = useState([])
    let token = localStorage.getItem("token")

    const points = ()=> {
        let point = 0;
        Object.keys(user.highScore).forEach(key => {
            point = point + user.highScore[key]
        });
        return point;
    }

    useEffect(()=> {
		var myInit = { 
			method: 'POST',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({token})
			}
			fetch(process.env.REACT_APP_URL_BACK+"user/auth",myInit)
			.then(res => res.json())
			.then(
			  (response) => {
                setUser(response.user) 
                setCurrentLogo(response.user.logoProfile)
                setFollower(response.user.abonnes)
                setFollow(response.user.abonnement)
			  }
			).catch(err => console.log(err))

  	}, [])

    if(user){
        let date = new Date(user.createdAt)
        return (
          <div>
                <Header></Header>
                <h1 className='d-none'>Mon Profil</h1>
                <div className='container'>
                    <div className='d-lg-flex justify-content-between mb-3'>
                        <div>
                            <div className='h1 d-flex align-items-center mb-2'>
                                <div className="m-0 border-img">
					                <img className='img-badge' src={`${process.env.REACT_APP_URL}/assets/logos/`+CurrentLogo+`.png`} alt="logo" title="logo"></img>
                                </div>
                                <div onClick={()=> {setDisplayModal(true)}} className='button-change-logo'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                     <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                </svg>
                                </div>
                                <h2 className='fs-50'>{user.pseudo} </h2>
                            </div>
                            <div>Membre depuis {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</div>
                            <div>{points()} points</div>
                        </div>
                        <div>
                            <Follow actionFollow={setModalFollow} actionFollower={setModalFollower} follows={user.abonnement} followers={user.abonnes } ></Follow>
                        </div>
                    </div>    
                </div> 
                <div className='bg-white '>
                    <div className='container py-3'>
                    <h2 className="text-black font-weight-bold h3">Records :</h2>
                        <RecordsDisplay records={user.highScore}></RecordsDisplay>
                    </div>
                </div>   
                <div className='container mt-3'>
                    <BadgesRow user={user} data={Data}></BadgesRow>
                </div>
                <ModalListUser users={follow} setModalList={setModalFollow} modalList={modalFollow}>Mes abonnements</ModalListUser>
                <ModalListUser users={follower} setModalList={setModalFollower} modalList={modalFollower}>Mes abonnés</ModalListUser>
		        <ModalLogo  logoProfile={user.logoProfile}  basicModal={displayModal} setBasicModal={setDisplayModal}  setCurrentLogo={setCurrentLogo} CurrentLogo={CurrentLogo} ></ModalLogo>
            </div>
        )
    }
}
