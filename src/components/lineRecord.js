import React from 'react'

export default function LineRecord(props) {
    
        function calculerPourcentage(valeur1, valeur2) {
        const pourcentage = (valeur1 / valeur2) * 100 || 0;
        const pourcentageArrondi = Math.round(pourcentage);
        return pourcentageArrondi;
      }
    
        let percent = (props.score /(props.limit) )  * 100 || 0; 
        let color = "";

        switch (true) {
            case percent === 100 : 
            color =  "background-green-plus"
            break;
            case percent > 90 : 
            color =  "background-green"
            break;
            case percent > 75 : 
            color =  "background-blue"
            break;
            case percent > 50 : 
            color =  "background-orange"
            break;
            case percent > 20 : 
            color =  "background-yellow"
            break;
            case percent > 0 : 
            color =  "background-grey"
            break;
            default : 
            color = "background-disable"
        }


  return (
   
    <div className="my-1">
        <div className="d-flex justify-content-between line-record">
            <div>{props.name}</div>
            <div>
                <div className='d-flex'>
                    <div className='pr-sm-4'>
                        {props.score} / {props.limit}
                    </div>
                    <div className={`${color} percent-area d-none d-sm-flex justify-content-center align-items-center `}>
                        {calculerPourcentage(props.score, props.limit)} %
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
