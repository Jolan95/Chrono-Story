import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ButtonFollow from './buttonFollow'
import { useSelector, useDispatch } from 'react-redux'
import {store} from '../app/store'
import { follow, unfollow } from '../store/user'


export default function LineUser({user}) {
    
     function isFollowed(idFollowed) {
        const currentUser = store.getState().userStore.user.abonnement
        if(currentUser.includes(idFollowed)){
            return true
        }
        return false
    }

    // const currentUser = useSelector((state) => state.userStore.user)
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

        console.log(idToFollow)
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
            console.log(error)
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
          },
          (error) => {
            console.log(error)
        })
    }
  return (
    <div className='row wrapper-user d-flex align-items-center px-3 py-1 '>
        <div className='col-3 '>
            {user.pseudo} 
        </div>
        <div className='col-5'>
        {point()}
        </div>
        <div className='col-2'>
            <Link to={`/user/${user._id}`}><button className='btn btn-primary'>Voir Profil</button></Link>
        </div>
        <div className='col-2 d-flex justify-content-center'>
        <ButtonFollow follow={()=> {handleFollow(user._id)}} unfollow={()=> {handleUnfollow(user._id)}} isFollow={isFollow}></ButtonFollow>
        </div>
    </div> 
  )
}
