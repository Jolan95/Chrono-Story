import React from 'react'

export default function NumberBadges(props) {
    let badgesTypes = ["gold" ,"silver", "bronze"]
    let medals=[]
    badgesTypes.forEach((medal)=>{
        medals.push(<img className='img-medal-md mr-sm-1' src={`${process.env.REACT_APP_URL}/assets/medals/`+medal+`.png`} alt={medal}></img>)
        medals.push(<span className='mr-md-2'>{props.badges[medal].length}</span>)
        }
    )
  return (
    
    <div class="d-flex">{medals}</div>
  )
}
