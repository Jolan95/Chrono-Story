import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ButtonFollow from './buttonFollow'

export default function LineUser({user}) {
    const [isFollow, setIsFollow] = useState(false)
    const point = ()=> {
        let point = 0;
        Object.keys(user.highScore).forEach(key => {
            point = point + user.highScore[key]
        });
        return point;
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
        <ButtonFollow isFollow={isFollow}></ButtonFollow>
        </div>
        <div className='col-2'>
        {point()}
        </div>
    </div>
  )
}
