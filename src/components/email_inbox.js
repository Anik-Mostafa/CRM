import React from 'react'
import CustomizedCheckbox from './chackbox'
import './email_page.css'
import Ratings from './ratings'
function EmailInbox() {
    return (
        <button className='inbox'>
            <CustomizedCheckbox/>
            <Ratings className='ratings'/>
            <h1 className='inbox__name'> Jon Doe</h1>
            <p className='inbox__description'>Lorem ipsum dolor sit, amet consetmurn omitable</p>
            <div className='inbox__attachimg'>
                <img style={{height:"12px",width:"10px"}} src="icons/attach.svg"></img>
            </div>
            <h2 className='inbox__time'>12:36</h2>
        </button>
    )
}

export default EmailInbox
