import React from 'react';
import {Link} from "react-router-dom";

const BoxQuiz = (props) => {
    
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <Link to={props.to}>
                <div className='box-quiz' style={{backgroundImage : "url("+ props.image +")"}}>
                    <div className='filter-on-image'>
                    <h3 className='text-center bold'>{props.children}</h3>
                    <p className='text-center bold'>{props.text}</p>
                    </div>
                </div>
            </Link>
            
        </div>
    )
}

export default BoxQuiz