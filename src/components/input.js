import React from 'react'

export default function Input(props) {
  return (
    <div>
        <input type={props.type} name={props.name} className='mt-2' onChange={e => props.action(e.target.value)} placeholder={props.placeholder}/>
    </div>
  )
}
