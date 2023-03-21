import React from 'react'
import datas from "../datas/data.json"
import LineRecord from './lineRecord'
import { Link } from 'react-router-dom'

export default function RecordsDisplay(props) {

    console.log(datas)
    datas.forEach((data) =>{
        if(data.active){
            data.size= data.data.length
            data.record = props.records[data.db] || 0;
            data.percent = (data.record /(data.size -1) )
        }
    })
    datas.sort((a, b) => b.percent - a.percent)
    var recordsDisplaying = datas.map(function(data, index) {
        if(data.active){
            return <Link to={data.url} key={index} ><LineRecord key={index} score={data.record} name={data.name} limit={data.size - 1}></LineRecord></Link>
        }
    });
    if(props.records === ""){
        return (        
            <div className="lds-dual-ring"></div>
        )
    } else {
        return(
            <div className="mb-4">
                {recordsDisplaying}
            </div>
        )
    }  
}
