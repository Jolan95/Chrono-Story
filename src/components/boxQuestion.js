import React from 'react'

export default function BoxQuestion(props) {
  return (
    <div className="text-center box-question" ><h1  style={props.isPlaying ? { display: `block` } : {display : "none"} } className="text-center question ">{props.picked.question}</h1></div>
  )
}
