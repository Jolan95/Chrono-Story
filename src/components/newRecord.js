import React from 'react'

export default function NewRecord(props) {

    if(props.badge){
        return(
            <div>
                <div className="h2 text-center">
                Nouveau Record !
                </div>
                <div className="score-final text-center effet-3d">
                {props.score}
                </div>
                <div className='h3 text-center'>
                Nouveau badge débloqué!
                </div>
                <div className='d-flex justify-content-center'>
                <img className='img-badge-big' src={`${process.env.REACT_APP_URL}/assets/badges/`+props.name+`_`+props.badge+`.png`} alt={props.name} title={"Badge "+props.name}></img>
                </div>
            </div>
        )
    } else if (props.isRecord){
            return (
            <div>
                <div className="h2 text-center ">
                Nouveau Record !
                </div>
                <div className='score-final text-center effet-3d'>
                    {props.score}
                </div>
            </div>
            )
    } else {
        return(
            <div>
                <div className='score-final text-center effet-3d'>
                    {props.score}
                </div>
            </div>
            )
    }
}
