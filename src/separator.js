import React from 'react'

const Separator = (props) => {
    return (
        <div>
            <h2>{props.children}</h2>
            <hr></hr>
        </div>
    )
}

export default Separator