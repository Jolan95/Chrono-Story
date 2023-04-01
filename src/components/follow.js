import React from 'react'

export default function Follow(props) {

    

  return (
    <div className='d-flex mt-2 mt-lg-0'>
        <div onClick={()=> {if(props.followers.length > 0){props.actionFollower(true)}}} className="wrapper-follow mr-3 pointer">
            <div className='text-center'>
                {props.followers.length}
            </div>
            <div className='text-center'>
                Abonnés
            </div>
        </div>
        <div onClick={()=> {if(props.follows.length >0){props.actionFollow(true)}}} className="wrapper-follow pointer">
            <div className='text-center'>
                {props.follows.length}
            </div>
            <div className='text-center'>
                Abonnements
            </div> 
        </div> 
    </div>
  )
}
