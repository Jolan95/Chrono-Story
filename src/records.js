import React, {useEffect, useState} from 'react'

export default function Records() {
    
    const [highscore, setHighscore] = useState({})
    
    useEffect(() => {
        const token = localStorage.getItem("token")
		if(token !== null){
            let user = JSON.parse(localStorage.getItem("user"));
		  	let id = user._id
		  	var myInit = { 
		  	method: 'POST',
		  	mode: 'cors',
		  	headers: { 'Content-Type': 'application/json' },
		  	body: JSON.stringify({id : id})
		  	}
		  	// fetch("https://chrono-back.herokuapp.com/api/auth/record",myInit)
            let records = fetch("http://localhost:5000/records/personal",myInit)
		  	.then(res => res.json())
		  	.then((response) => {
                      setHighscore({highscore : response.highScore})
                      return response;
                    },
                    (error) => {
                        return error
                    }
                    )
	  	} 
	}, [])
    
  return (
    <div>


    </div>
  )
}
