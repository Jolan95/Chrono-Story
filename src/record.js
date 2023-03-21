import React, {useState, useEffect} from 'react'
import RecordsDisplay from './components/recordsDisplay';
import Header from './components/header';

export default function Record() {
    const [records, setRecords] = useState("")
    useEffect(() => {
        if(localStorage.getItem("token") !== undefined){
		  	let user = JSON.parse(localStorage.getItem("user"));
		  	let id = user._id
		  	var myInit = { 
		  	method: 'POST',
		  	mode: 'cors',
		  	headers: { 'Content-Type': 'application/json' },
		  	body: JSON.stringify({id})
		  	}
		  	fetch(process.env.REACT_APP_URL_BACK+"records/personal/",myInit)
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
        <>
            <div>
            <Header></Header>
            <div className="d-flex justify-content-center">
            <RecordsDisplay records={records}></RecordsDisplay>
            </div>
            </div>
        </>
    )
}
