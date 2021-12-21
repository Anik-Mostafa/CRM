import React from 'react'
import './modalform.css'
import ClearIcon from '@material-ui/icons/Clear';
import {Grid} from '@material-ui/core'
function NewTask() {
    return (
        <div className='modal'>
            <div className='modal__nav'>
                <h3>Add Task</h3>
                <button className='modalclearicon'>
                    <ClearIcon style={{background:"#ffffff",height:"15px",width:"15px"}}/>
                </button>
            </div>
            <div className='modalform'>
                <div className='modalform__title'>
                    <h3>Task Details</h3>
                </div>
                <Grid  container spacing={4}>
                    <Grid item lg={6} md={6} sm={6} xs={12} > 
                        <label className='modal__inputname'><h4>Task name</h4><h2>*</h2></label>
                        <div className="modal__inputfield">
                            <input  type="text" />
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12} > 
                        <label className='modal__inputname'><h4>Assigned To</h4></label>
                        <select className='modal__selectbtn'>
                            <option value="">Me</option>
                            <option value="">You</option>
                        </select>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12} > 
                        <label className='modal__inputname'><h4>Category</h4></label>
                        <select className='modal__selectbtn'>
                            <option className='selectoption' value="">Email</option>
                            <option value="">Follow Up</option>
                            <option value="">Get Started</option>
                            <option value="">Meeting</option>
                            <option value="">Phone Call</option>
                        </select>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12} > 
                        <label className='modal__inputname'><h4>Due Date</h4><h2>*</h2></label>
                        <div className="modal__inputfield">
                            <input  type="date" placeholder="MM/DD/YY"/>
                        </div>
                    </Grid>
                </Grid>
                <div className='modalform__title'>
                    <h3>Additional Information</h3>
                </div>
                <Grid  container spacing={4}>
                    <Grid item lg={6} md={6} sm={6} xs={12} > 
                        <label className='modal__inputname'><h4>Start Date</h4><h2>*</h2></label>
                        <div className="modal__inputfield">
                            <input  type="date" placeholder="MM/DD/YY"/>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12} > 
                        <label className='modal__inputname'><h4>Remainder Date</h4><h2>*</h2></label>
                        <div className="modal__inputfield">
                            <input  type="date" placeholder="MM/DD/YY"/>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12} > 
                        <label className='modal__inputname'><h4>Progress</h4></label>
                        <div className="modal__inputfield">
                            <input  type="text" />
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12} > 
                        <label className='modal__inputname'><h4>Progress</h4></label>
                        <div className="modal__inputfield">
                            <input  type="text" />
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12} > 
                        <label className='modal__inputname'><h4>Priority</h4></label>
                        <select className='modal__selectbtn'>
                            <option value="">Low</option>
                            <option value="">Medium</option>
                            <option value="">High</option>
                        </select>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12} > 
                        <label className='modal__inputname'><h4>Priority</h4></label>
                        <select className='modal__selectbtn'>
                            <option value="">Low</option>
                            <option value="">Medium</option>
                            <option value="">High</option>
                        </select>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12} > 
                        <label className='modal__inputname'><h4>Started</h4></label>
                        <select className='modal__selectbtn'>
                            <option value="">Not Started</option>
                            <option value="">Inprogress</option>
                            <option value="">Deffered</option>
                            <option value="">Waiting</option>
                        </select>
                    </Grid>
                </Grid>
                <div className='modalform__title'>
                    <h3>Related To</h3>
                </div>
                <Grid container spacing={4}>
                    <Grid item lg={6} md={6} sm={6} xs={12} > 
                        <label className='modal__inputname'><h4>Related To</h4></label>
                        <select className='modal__selectbtn'>
                            <option value="">Select</option>
                            <option value="">Test</option>
                        </select>
                    </Grid>
                </Grid>
                <div className='modalform__title'>
                    <h3>Description</h3>
                </div>
                <Grid container spacing={4}>
                    <Grid item lg={12} md={12} sm={12} xs={12} > 
                        <label className='modal__inputname'><h4>Description</h4></label>
                        <div className="modal__description">
                            <input  type="text"/>
                        </div>
                    </Grid>
                </Grid>
                <div className='modalform__title'>
                    <h3>Premission</h3>
                </div>
                <Grid container spacing={4}>
                    <Grid item lg={6} md={6} sm={6} xs={12} > 
                        <label className='modal__inputname'><h4>Premission</h4></label>
                        <select className='modal__selectbtn'>
                            <option value="">Task Visibility</option>
                            <option value="">Private Task</option>
                        </select>
                    </Grid>
                </Grid>
                <div className='modalbuttons'>
                    <button className='save__btn'>Save</button>
                    <button className='cancel__btn'>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default NewTask
