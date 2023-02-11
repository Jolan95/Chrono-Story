import React from 'react';
import { useState, useEffect } from 'react';

function Box(props) {
    const [dateMax, setDateMax] = useState();
    useEffect(()=> {
        if((props.index + 1) < props.questionAnswered.length  ) {
            let DateSup = props.questionAnswered[props.index + 1].date 
            setDateMax(DateSup)

        } else{
            setDateMax(new Date().getFullYear())
        }
    })
    const mystyle = {
        backgroundColor : props.datas.answer,
        border : props.datas.answer
    };
    const convertDate = (date) => {
        if(date<0){
        date = date.toString().split(".");
        date[0] = date[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        // str.join(".");
            return date+' av JC'
        }
        return date
    }
 
    return (
        <>
        <div className="center">

        <div className="wrapper-box" style={mystyle}>
            <div className="x-bold text-center">{convertDate(props.datas.date)}</div>
            <div className=' text-center'>{props.datas.question}</div>
        </div>
        </div>
        <div className="area-answer"  data-min={props.datas.date} data-max={dateMax} onClick={props.handleTiret}>
            <div className="tiret" data-min={props.datas.date} data-max={dateMax}></div>
        </div>
        </>
    );
}

export default Box;