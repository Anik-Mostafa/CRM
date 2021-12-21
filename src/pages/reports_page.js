import { Grid } from '@material-ui/core'
import React,{useState} from 'react';
import Header from '../components/header'
import PersonalReports from '../components/PersonalReports'
import TablePage from '../components/table'
import ClearIcon from '@material-ui/icons/Clear';

function ReportsPage() {
    const [modal,setModal]=useState(false);
    
    return (
        <div>
            <Grid spacing={3} container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                <Header name="Reports"/>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                <div style={{display:"flex",justifyContent:'space-between'}}>
                <div style={{fontSize:"18px",color:'1f1f1f',padding:"6px"}}>Advanced Reporting</div>
                {/* <button onClick={()=>setModal(!modal)} className="modal__button__new">New Contacts</button> */}
            </div>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                <div style={{fontSize:"14px",color:"#333333",padding:"19px",background:"white"}}>
                    Welcome to Advanced Reporting! Need help? Check out our articles or watch the video.
                </div>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                    <PersonalReports/>
                </Grid>
                <Grid item lg={8} md={8} sm={8} xs={12}>
                    <TablePage/>
                </Grid>
            </Grid>
        </div>
    )
}

export default ReportsPage
