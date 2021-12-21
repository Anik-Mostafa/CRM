import React from 'react'
import Header from '../components/header'
import EmailInbox from '../components/email_inbox'

function Emaillist() {
    return (
        <div >
            <Header name="Email"/>

            <div style={{ height:"800px",marginTop:"15px",borderRadius:"5px",border:"1px solid #e3e3e3",background:"#FFFFFF"}}>
                <EmailInbox/>
                <EmailInbox/>
                <EmailInbox/>
                <EmailInbox/>
                <EmailInbox/>
                <EmailInbox/>
                <EmailInbox/>
                <EmailInbox/>
                <EmailInbox/>
                <EmailInbox/>
                <EmailInbox/>
            </div>
        </div>
    )
}

export default Emaillist
