import React from 'react'
import './modalform.css'
import './systemuser.css'
import {Grid} from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear';
import StarIcon from '@material-ui/icons/Star';
import LockIcon from '@material-ui/icons/Lock';
import SystemAccordion from './SystemAccordion';
function SystemUser() {
    return (
        <div className='modal'>
            <div className='modal__nav'>
                <div className='systemuser'>
                <img src="https://avatars.githubusercontent.com/u/47418635?s=460&u=80074125174b1b3afda1d00af6aa89eaae9edab9&v=4&fbclid=IwAR1LQMCp_kEflcnAsti1cseuWVTJeccen4PByZhsTrd6Cl-aS2DpXMF6CjA"></img>
                   <div className='systemuser__title'>
                        <h1>System User</h1>
                        <div className='systemuser__name'>
                            <h1>Salman</h1>
                            <StarIcon style={{height:"15px",width:"15px"}}/>
                            <LockIcon style={{height:"15px",width:"15px"}}/>
                        </div>
                   </div>
                </div>
                <button className='modalclearicon'>
                   <ClearIcon style={{background:"#ffffff"}}/>
                </button>
            </div>
            <div className='systemuser__form'>
                <table className="systemtable">
                    <tr>
                        <th>Lead Status</th>
                        <th>Name</th>
                        <th>Lead Source</th>
                        <th>Lead Ratings</th>
                        <th>Lead owner</th>
                    </tr>
                    <tr>
                        <td>Not Contacted</td>
                        <td>Maha</td>
                        <td>Phone Enquiry</td>
                        <td>0</td>
                        <td>Rinta</td>
                    </tr>
                </table>
                <div className='systembuttons'>
                    <div className='squarebtn'>
                        <Grid  container spacing={0}>
                            <Grid item lg={3} md={3} sm={3} xs={12} > 
                                {/* <button className='squarebtn__unmark'>Not Contacted</button> */}
                                <button className='squarebtn__mark'>Not Contacted</button>
                            </Grid> 
                            <Grid item lg={3} md={3} sm={3} xs={12} > 
                                <button className='squarebtn__unmark'>Attempeted Contact</button>
                                {/* <button className='squarebtn__mark'>Not Contacted</button> */}
                            </Grid>
                            <Grid item lg={3} md={3} sm={3} xs={12} > 
                                <button className='squarebtn__unmark'>Contact</button>
                                {/* <button className='squarebtn__mark'>Not Contacted</button> */}
                            </Grid>
                            <Grid item lg={3} md={3} sm={3} xs={12} > 
                                <button className='squarebtn__unmark'>Converted</button>
                                {/* <button className='squarebtn__mark'>Not Contacted</button> */}
                            </Grid>
                        </Grid>
                    </div>
                   
                </div>
                <div className='systembuttons__round'>
                    <div className='roundbtn'>
                        <Grid  container spacing={0}>
                            <Grid item lg={4} md={4} sm={4} xs={4} > 
                                {/* <button className='roundbtn__unmark'>Details</button> */}
                                <button className='roundbtn__mark'>Details</button>
                            </Grid> 
                            <Grid item lg={4} md={4} sm={4} xs={4} > 
                            <button className='roundbtn__unmark'>Related</button>
                                {/* <button className='roundbtn__mark'>Related</button> */}
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4} > 
                                <button className='roundbtn__unmark'>Activity</button>
                                {/* <button className='roundbtn__mark'>Activity</button> */}
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className='systemaccordon'>
                    <SystemAccordion/>
                </div>
            </div> 
        </div>
    )
}

export default SystemUser
