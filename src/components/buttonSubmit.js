import React from 'react'

export default function ButtonSubmit(props) {
  return (
    <div>
        <button className='btn btn-success mt-3' disabled={props.disabled || false} type="submit">{props.children}</button>
    </div> 
  )
}
