import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ButtonFollow from './buttonFollow'



export default function LineUser({user}) {

    const [isFollow, setIsFollow] = useState(user.abonnement.includes(JSON.parse(localStorage.getItem("user"))._id))
    const point = ()=> {
        let point = 0;
        Object.keys(user.highScore).forEach(key => {
            point = point + user.highScore[key]
        });
        return point;
    }

    // getMyFollower()


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
          },
          (error) => {
            console.log(error)
        })
    }

    
  return (
    <div className='user-wrapper row'>
        <div className='col-3'>
            {user.lastname} {user.firstname}  
        </div>
        <div className='col-3'>
            <Link to={`/user/${user._id}`}><button className='btn btn-primary'>Voir Profil</button></Link>
        </div>
        <div className='col-2'>
        <ButtonFollow follow={()=> {handleFollow(user._id)}} unfollow={()=> {handleUnfollow(user._id)}} isFollow={isFollow}></ButtonFollow>
        </div>
        <div className='col-2'>
        {point()}
        </div>
    </div> 
  )
}
