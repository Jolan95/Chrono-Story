import React from 'react'

export default function Alert(props) {
  return (
    <div className={`alert-${ props.style } d-${props.display } p-3 alert-box`}>{props.children}</div>
  )
}
