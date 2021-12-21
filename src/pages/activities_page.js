import React,{useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table,Grid,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Button ,TextField, createMuiTheme, ThemeProvider, Avatar } from '@material-ui/core';
import { MoreVert,Add, Star } from '@material-ui/icons';
import Header from '../components/header';
import CustomizedCheckbox from '../components/chackbox';
import { Link } from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';

const StyledTableCell = withStyles((theme) => ({

    body: {
        fontSize: 14,
    },
    }))(TableCell);
    
    const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: " #f6f6f6 ",
        },
    },
    }))(TableRow);
    
    const theme = createMuiTheme({
        palette:{
            secondary:{
                main:'#070707'
            }
        }
    })
    
    
    const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    });

export default function ActivitiesPage() {
const classes = useStyles();
    const [modal,setModal]=useState(false);

return (
    <ThemeProvider theme={theme}>
        <div>
                
            <Header name="Activities"/>
            <div className="main_button">
                {/* {css-Navbar.css} */}
                <div>
                <TextField  id="outlined-select-currency-native" select SelectProps={{native: true}}
                                        variant="outlined"
                                        fullWidth
                                        color='secondary'
                                        style={{borderRadius:"15px",border:'none',outlineStyle:"none"}}
                                        >
                                        <option>All Tasks</option>
                                        <option>Items I'm following</option>
                                        <option>All completed Tasks</option>
                                        <option>My completed Tasks</option>
                                        <option>My Tasks</option>
                                    </TextField>
                </div>
                <button onClick={()=>setModal(!modal)} className="modal__button">New Activity</button>
            </div>

             {/* modal */}

            
             {/* modal */}

            {modal?(<div className="modal__main">
            <div style={{height:"100%",overflowX:"scroll",padding:"10px"}} className='addClient'>
            <div className='modal'>
            <div className='modal__nav'>
                <h3>Add Task</h3>
                <button className='modalclearicon'>
                    <ClearIcon onClick={()=>setModal(false)} style={{background:"#ffffff",height:"15px",width:"15px"}}/>
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
        </div>
</div>
):(null)}
                    
                    
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>Done</StyledTableCell>
                            <StyledTableCell style={{fontSize:"13px",color:"#838989",fontWeight:"500",minWidth:"100px"}}>Subject</StyledTableCell>
                            <StyledTableCell style={{fontSize:"13px",color:"#838989",fontWeight:"500",minWidth:"100px"}}>Deal</StyledTableCell>
                            <StyledTableCell style={{fontSize:"13px",color:"#838989",fontWeight:"500",minWidth:"100px"}}>Contact Person</StyledTableCell>
                            <StyledTableCell style={{fontSize:"13px",color:"#838989",fontWeight:"500",minWidth:"100px"}}>Email</StyledTableCell>
                            <StyledTableCell style={{fontSize:"13px",color:"#838989",fontWeight:"500",minWidth:"100px"}}>Phone</StyledTableCell>
                            <StyledTableCell style={{fontSize:"13px",color:"#838989",fontWeight:"500",minWidth:"100px"}}>Compaines</StyledTableCell>
                            <StyledTableCell style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>Action</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow key="salmanasif">
                                <StyledTableCell ><CustomizedCheckbox/></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",fontWeight:"500"}}><Link>Call</Link></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}><Link>Ansanio tech</Link></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>Cravo Ansanio</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>wilmer@gmail.com</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>(406) 653-3860	</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}><Link>Soylent Corp</Link></StyledTableCell>
                                <StyledTableCell ><MoreVert/></StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                        <TableBody>
                            <StyledTableRow key="salmanasif">
                                <StyledTableCell ><CustomizedCheckbox/></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",fontWeight:"500"}}><Link>Call</Link></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}><Link>Ansanio tech</Link></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>Cravo Ansanio</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>wilmer@gmail.com</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>(406) 653-3860	</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}><Link>Soylent Corp</Link></StyledTableCell>
                                <StyledTableCell ><MoreVert/></StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                        <TableBody>
                            <StyledTableRow key="salmanasif">
                                <StyledTableCell ><CustomizedCheckbox/></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",fontWeight:"500"}}><Link>Call</Link></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}><Link>Ansanio tech</Link></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>Cravo Ansanio</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>wilmer@gmail.com</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>(406) 653-3860	</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}><Link>Soylent Corp</Link></StyledTableCell>
                                <StyledTableCell ><MoreVert/></StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                        <TableBody>
                            <StyledTableRow key="salmanasif">
                                <StyledTableCell ><CustomizedCheckbox/></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",fontWeight:"500"}}><Link>Call</Link></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}><Link>Ansanio tech</Link></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>Cravo Ansanio</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>wilmer@gmail.com</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>(406) 653-3860	</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}><Link>Soylent Corp</Link></StyledTableCell>
                                <StyledTableCell ><MoreVert/></StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                        <TableBody>
                            <StyledTableRow key="salmanasif">
                                <StyledTableCell ><CustomizedCheckbox/></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",fontWeight:"500"}}><Link>Call</Link></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}><Link>Ansanio tech</Link></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>Cravo Ansanio</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>wilmer@gmail.com</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>(406) 653-3860	</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}><Link>Soylent Corp</Link></StyledTableCell>
                                <StyledTableCell ><MoreVert/></StyledTableCell>
                            </StyledTableRow>
                        </TableBody>

                    </Table>
                </TableContainer>
            </div>
        {/* </div> */}
    </ThemeProvider>
);
}