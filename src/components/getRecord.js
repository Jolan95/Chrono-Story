import React from 'react'

export default function Record(props) {
    let token = props.token
    let record = props.record
    if(token !== null){
        if(props.record !== undefined && record !== ""){
            return <div className='px-1'>Record : {record}</div>
        }
        return <div>Record : 0</div>
    }
    return <div></div>

}
