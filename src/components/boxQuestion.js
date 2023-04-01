import React from 'react'

export default function BoxQuestion(props) {
  return (
    <div className="text-center box-question" ><h2  style={props.isPlaying ? { display: `block` } : {display : "none"} } className="text-center question ">{props.picked.question}</h2></div>
  )
}
