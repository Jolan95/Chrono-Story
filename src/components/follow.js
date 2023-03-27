import React from 'react'

export default function Follow({follows, followers}) {

  return (
    <div className='d-flex '>
        <div className="wrapper-follow mr-3">
            <div className='text-center'>
                {followers.length}
            </div>
            <div className='text-center'>
                Abonnés
            </div>
        </div>
        <div className="wrapper-follow">
            <div className='text-center'>
                {follows.length}
            </div>
            <div className='text-center'>
                Abonnements
            </div> 
        </div> 
    </div>
  )
}
