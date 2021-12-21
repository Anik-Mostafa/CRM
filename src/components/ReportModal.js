import React from 'react'
import './modalform.css'
import ClearIcon from '@material-ui/icons/Clear';
import {Grid} from '@material-ui/core'
function ReportModal() {
    return (
        <div className='modal'>
            <div className='modal__nav'>
                <h3> Add New Report </h3>
                <button className='modalclearicon'>
                    <ClearIcon style={{background:"#ffffff",height:"15px",width:"15px"}}/>
                </button>
            </div>
            <div className='modalform'>
                <div className='reportbuttons'>
                    <button className='save__btn'>Save</button>
                    <button className='cancel__btn'>Cancel</button>
                </div>
                <Grid container spacing={0}>
                    <Grid item lg={12} md={12} sm={12} xs={12} > 
                        <label className='modal__inputname'><h4>Choose a Report type</h4></label>
                        <select className='modal__selectbtn'>
                            <option value="">Task Report</option>
                            <option value="">Contact Report</option>
                            <option value="">Company Report</option>
                        </select>
                    </Grid>
                </Grid>
                <h4 style={{marginTop:"15px",marginBottom:"15px"}}>REPORT PREVIEW</h4>
            </div>
        </div>
    )
}

export default ReportModal
