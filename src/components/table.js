import React,{useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table,Grid,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Button ,TextField, createMuiTheme, ThemeProvider, Avatar } from '@material-ui/core';
import { MoreVert} from '@material-ui/icons';
import Header from '../components/header';
import CustomizedCheckbox from '../components/chackbox';
import { Link } from 'react-router-dom';

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

export default function TablePage() {
const classes = useStyles();
    const [modal,setModal]=useState(false);

return (
    <ThemeProvider theme={theme}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell style={{fontSize:"13px",color:"#838989",fontWeight:"500",minWidth:"100px"}}>Report Name</StyledTableCell>
                            <StyledTableCell style={{fontSize:"13px",color:"#838989",fontWeight:"500",minWidth:"100px"}}>Date Created</StyledTableCell>
                            <StyledTableCell style={{fontSize:"13px",color:"#838989",fontWeight:"500",minWidth:"100px"}}>Created By</StyledTableCell>
                            <StyledTableCell style={{fontSize:"13px",color:"#838989",fontWeight:"500",minWidth:"100px"}}>Scheduled</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow key="salmanasif">
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}><Link>Evaluation</Link></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>John Doe</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>02, june 2020</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>-</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                        <TableBody>
                            <StyledTableRow key="salmanasif">
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}><Link>Evaluation</Link></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>John Doe</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>02, june 2020</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>-</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                        <TableBody>
                            <StyledTableRow key="salmanasif">
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}><Link>Evaluation</Link></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>John Doe</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>02, june 2020</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>-</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                        <TableBody>
                            <StyledTableRow key="salmanasif">
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}><Link>Evaluation</Link></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>John Doe</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>02, june 2020</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>-</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                        <TableBody>
                            <StyledTableRow key="salmanasif">
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}><Link>Evaluation</Link></StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>John Doe</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>02, june 2020</StyledTableCell>
                                <StyledTableCell  style={{fontSize:"13px",color:"#838989",fontWeight:"500"}}>-</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
    </ThemeProvider>
);
}