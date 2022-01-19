import React from 'react'
import './Body.css'
function Body(props) {
    return (
        <div className='body-container'>
            {props.children}
        </div>
    )
}

export default Body
