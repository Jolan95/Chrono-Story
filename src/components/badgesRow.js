import React from 'react'
export default function BadgesRow({user, data}) {

    let badges= []
    let gamesUsed = [];
    let badgesColors = ["gold", "silver", "bronze"]
    badgesColors.forEach((color ) => {
        if(user.badges[color].length > 0){
            badges.push(<div key={color} className='font-weight-bold d-flex align-items-center mt-2 mb-1'><img className='img-medal mr-1' src={`${process.env.REACT_APP_URL}/assets/medals/`+color+`.png`} alt={color}></img>{color.charAt(0).toUpperCase() + color.slice(1)}</div>)
        }
        Object.values(user.badges[color]).forEach((game)=> {
            gamesUsed.push(game)
            badges.push(<img className='img-badge mb-2' key={game} src={`${process.env.REACT_APP_URL}/assets/badges/`+game+`_`+color+`.png`} alt="cinema" title={"Badge "+color}></img>)
        }); 
    })

    let atleastOne = false
    data.forEach((game, index) => {
        if(!gamesUsed.includes(game.db)){
            if(!atleastOne){
                badges.push(<div key={game.db} className="pb-1">Badges non débloqués :</div>)
            }
            atleastOne = true
            badges.push(<img key={game.name} className='img-badge-small' src={`${process.env.REACT_APP_URL}/assets/badges/`+game.db+`_none.png`} alt={game.name} title={"Badge "+game.name}></img>)
        }
    })
    return <div className='mb-3'>
    <h3 className='h3'>Badges :</h3>
        {badges}
    </div>
    
    
}
