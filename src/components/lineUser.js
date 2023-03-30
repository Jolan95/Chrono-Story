import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ButtonFollow from './buttonFollow'
import { useSelector, useDispatch } from 'react-redux'
import {store} from '../app/store'
import { follow, unfollow } from '../store/user'
import NumberBadges from './NumberBadges'


export default function LineUser({user}) {
    
     function isFollowed(idFollowed) {
        const currentUser = store.getState().userStore.user.abonnement
        if(currentUser.includes(idFollowed)){
            return true
        }
        return false
    }

    const dispatch = useDispatch()
    const [isFollow, setIsFollow] = useState(isFollowed(user._id))

    const point = ()=> {
        let point = 0;
        Object.keys(user.highScore).forEach(key => {
            point = point + user.highScore[key]
        });
        return point;
    }

    const handleFollow = (idToFollow)=> {

        var myInit = { 
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id : JSON.parse(localStorage.getItem("user"))._id, idToFollow : idToFollow})
        }
        fetch(process.env.REACT_APP_URL_BACK+"user/follow",myInit)
        .then(res => res.json())
        .then(
          (response) => {
            dispatch(follow(user._id))
            setIsFollow(true)
          },
          (error) => {
        })
    }
    const handleUnfollow = (idToUnfollow)=> {
        var myInit = { 
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id : JSON.parse(localStorage.getItem("user"))._id, idToUnfollow : idToUnfollow})
        }
        fetch(process.env.REACT_APP_URL_BACK+"user/unfollow",myInit)
        .then(res => res.json())
        .then(
          (response) => {
            setIsFollow(false)
            dispatch(unfollow(user._id))
          })
    }
  return (
    <div className='row wrapper-user d-flex align-items-center px-3 py-1 h5'>
        <div className='col-4  d-flex align-items-center '>
            <img className='img-logo-small' src={`${process.env.REACT_APP_URL}/assets/logos/`+user.logoProfile+`.png`} alt="logo" title="logo"></img>
            <span className='fs-30'>
            {user.pseudo} 
            </span>
        </div>
        <div className='col-1'>
        {point()}
        </div>
        <div className=' col-2'>
            <NumberBadges badges={user.badges}></NumberBadges>
        </div>
        <div className='offset-1 col-2'>
            <Link to={`/user/${user._id}`}>
              <button className='btn-grad btn-grad-blue'>
                <span className='d-none d-md-flex'>Profil</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="d-md-none bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
              </button>
            </Link>
        </div>
        <div className='  col-2 d-flex justify-content-center'>
        <ButtonFollow follow={()=> {handleFollow(user._id)}} unfollow={()=> {handleUnfollow(user._id)}} isFollow={isFollow}></ButtonFollow>
        </div>
    </div> 
  )
}
