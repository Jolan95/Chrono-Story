import React from 'react'

export default function BadgesRow({user, data}) {

    let badges= []
    let gamesUsed = [];
    let badgesColors = ["gold", "silver", "bronze"]
    badgesColors.forEach((color) => {
        if(user.badges[color].length > 0){
            badges.push(<div className='font-weight-bold d-flex align-items-center'><img className='img-medal mr-1' src={`${process.env.REACT_APP_URL}/assets/medals/`+color+`.png`} alt={color}></img>{color.charAt(0).toUpperCase() + color.slice(1)}</div>)
        }
        Object.values(user.badges[color]).forEach((game)=> {
            gamesUsed.push(game)
            badges.push(<img className='img-badge' src={`${process.env.REACT_APP_URL}/assets/badges/`+game+`_`+color+`.png`} alt="cinema" title={"Badge "+color}></img>)
        }); 
    })
    console.log(gamesUsed)
    let atleastOne = false
    data.forEach((game) => {
        if(!gamesUsed.includes(game.db)){
            !atleastOne ? badges.push(<div>Non débloqués</div>) : console.log()
            atleastOne = true
            badges.push(<img className='img-badge' src={`${process.env.REACT_APP_URL}/assets/badges/`+game.db+`_none.png`} alt={game.name} title={"Badge "+game.name}></img>)
        }
    })
    return <div>
        {badges}
    </div>
    
    
}
