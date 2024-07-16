import './Module.css';
import React from 'react'

export default function Module(props) {
    return (
        <div className='modal-backdrop'>
            <div className='modal'> 
                {props.children}
                <button onClick={props.handleClose}>Close</button>
            </div>
        </div>
    )
}
