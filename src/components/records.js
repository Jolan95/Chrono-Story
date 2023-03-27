import React, {useState, useEffect} from 'react'
import RecordsDisplay from './recordsDisplay';


export default function Record(props) {
    const [records, setRecords] = useState("")
    useEffect(() => {
        if(props.userId !== undefined){
		  	let id = props.userId
		  	var myInit = { 
		  	method: 'POST',
		  	mode: 'cors',
		  	headers: { 'Content-Type': 'application/json' },
		  	body: JSON.stringify({id})
		  	}
		  	fetch(process.env.REACT_APP_URL_BACK+"record/all",myInit)
		  	.then(res => res.json())
		  	.then(
				(response) => {
					setRecords(response.data)
				},
				(error) => {
					setRecords(null)
                }
                )
            }
        }, [])
        
    return (
        <RecordsDisplay records={records}></RecordsDisplay>
        
    )
}
