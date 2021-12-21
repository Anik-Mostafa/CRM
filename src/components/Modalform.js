import React from 'react'
import './modalform.css'
import {Grid} from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear';
function Modalform() {
    return (
        <div className='modal'>
            <div className='modal__nav'>
                <h3>Add Task</h3>
                <button className='modalclearicon'>
                   <ClearIcon style={{background:"#ffffff"}}/>
                </button>
            </div>

            <div className='modalform'>
                <div className='modalform__title'>
                    <h3>Task Details</h3>
                </div>
            </div>  
            <Grid  container spacing={4}>
                <Grid item lg={12} md={12} sm={12} xs={12} > 
                    <label className='modal__inputname'><h4></h4><h4>*</h4></label>
                    <select className='modal__selectbtn'>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </Grid> 
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <label className='modal__inputname'><h4></h4><h4>*</h4></label>
                    <div className="modal__inputfield">
                        <input  type="text"/>
                    </div>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <label className='modal__inputname'><h4>Choose file</h4><h4>*</h4></label>
                    <div className="modal__inputfield">
                        <input  type="file"/>
                    </div>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <label className='modal__inputname'><h4>Description</h4><h4>*</h4></label>
                    <div className="modal__description">
                        <input  type="text"/>
                    </div>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <label className='modal__inputname'><h4>Numbers of Day</h4><h4>*</h4></label>
                    <div className="modal__div">
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Modalform
