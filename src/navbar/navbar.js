import React,{useState} from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import {Avatar,Button} from '@material-ui/core';
import { MoreVert ,AccountTree, Assessment, Search, AssignmentTurnedIn,Dashboard, LocalActivity, LocationCity,  MailOutline, PermContactCalendar, PermIdentity, WifiTethering } from '@material-ui/icons';
import MenuOpenIcon from '@material-ui/icons/List';
import "./navbar.css";
import { Link } from 'react-router-dom'
import Sidenav from './sidenav';
function Navbar() {
    const [menu, setMenu] = useState(false)
    const [admin, setAdmin] = useState(false);
    return (
        <div>
            <div className="topnav">
                    <div className="sideMenu__display"><Button  onClick={()=>setMenu(!menu)}><MenuOpenIcon style={{color:"#ffffff",height:"40px",width:"40px"}} /></Button></div>

            <div className='topnav__logo'>
                <a><h1>CRM</h1></a>
            </div>  
            <div className='menuandname'>
                {/* <a>
                    <MenuOpenIcon style={{color:"#FFFFFF",height:"30px",width:"50px",marginTop:"8px"}} />
                </a> */}
                <h2>Company Name</h2>
            </div>
            <div className="sideMenu__display"><MoreVert style={{color:"#ffffff",height:"35px",width:"35px"}} /></div>
            <div className='lastpart'>
                <div className='navsearch'>
                    <input type='text'/>
                    <a href=''>
                        {/* <Search style={{color:"black",paddingTop:"1px"}}/>   */}
                        <img src='icons/srcicon.png' style={{height:"15px",width:"15px"}}/>
                    </a>       
                </div>
                <a>
                    <NotificationsNoneIcon style={{color:"#ffffff",height:"35px",width:"32px",marginLeft:"10px",marginTop:"5px"}} />
                </a>
                <a>
                    <ChatBubbleOutlineIcon style={{color:"#ffffff",height:"28px",width:"30px",marginLeft:"10px",marginTop:"5px"}} />
                </a>
                <div onClick={()=>setAdmin(!admin)} className="nav__avater">
                    <Avatar src="https://firebasestorage.googleapis.com/v0/b/gojustitech-hr.appspot.com/o/christopher-campbell-rDEOVtE7vOs-unsplash.jpg?alt=media&token=65da80ef-34c0-4c96-8bb6-7dc02d6c6073" height="35px" width="35px"/>
                    <div style={{marginLeft:"5px",display:"flex",alignItems:"center"}}>
                        <p style={{fontSize:"16px",fontWeight:"400",color:"#ffffff"}} >Charlie Rose</p>
                    </div>
                </div>
                <div className='get_admin'>
                    {admin?(<div onClick={()=>setAdmin(!admin)} style={{position:"fixed",top:"0px",bottom:"0px",left:"0px",right:"0px"}}/>):(null)}
                    {
                        admin?(
                        <div className="adminprofile_modal">
                            <div className='modal-admin'>
                                <div className='modal-admin__heading'>
                                    <p className='modal-admin__heading-name'>Freddie C. Henderson</p>
                                </div>
                                <div className="modal-admin__menu">
                                    <a>My Profile</a>
                                    <a>Task</a>
                                    <a>Message</a>
                                    <a>Account Setting</a>
                                    <a>Log out</a>
                                </div>     
                            </div>
                        </div>):(null)
                    }
                </div>
            </div>    
        </div>
        <div className="sideMenu__display">
            {menu?(
                <div>
                    <div onClick={()=>setMenu(false)} style={{width:"100%",height:"900px",position:'fixed',zIndex:"11"}}/>
                <div className="sidenav">
                <div style={{height:"100%"}} className="sidenav__scroll">

                    {/* main */}


                    <p className="sidenav__title">Main</p>
                    
                        <Link onClick={()=>setMenu(false)} to="/">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <Dashboard/>
                                    <p className="sidenav__category__name">Dashboard</p>
                                </div>
                            </div>
                        </Link>
                        <Link onClick={()=>setMenu(false)} to="/task">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <AssignmentTurnedIn/>
                                    <p className="sidenav__category__name">Tasks</p>
                                </div>
                            </div>
                        </Link>
                        <Link onClick={()=>setMenu(false)} to="/contacts">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <PermContactCalendar/>
                                    <p className="sidenav__category__name">Contacts</p>
                                </div>
                            </div>
                        </Link>
                        <Link onClick={()=>setMenu(false)} to="/companies">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <LocationCity/>
                                    <p className="sidenav__category__name">Companies</p>
                                </div>
                            </div>
                        </Link>
                        <Link onClick={()=>setMenu(false)} to="/leads">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <PermIdentity/>
                                    <p className="sidenav__category__name">Leads</p>
                                </div>
                            </div>
                        </Link>
                        <Link onClick={()=>setMenu(false)} to="/deals">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <WifiTethering/>
                                    <p className="sidenav__category__name">Deals</p>
                                </div>
                            </div>
                        </Link>
                        <Link onClick={()=>setMenu(false)} to="/projects">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <AccountTree/>
                                    <p className="sidenav__category__name">Projects</p>
                                </div>
                            </div>
                        </Link>
                        <Link onClick={()=>setMenu(false)} to="/reports">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <Assessment/>
                                    <p className="sidenav__category__name">Reports</p>
                                </div>
                            </div>
                        </Link>
                        <Link onClick={()=>setMenu(false)} to="/activities">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <LocalActivity/>
                                    <p className="sidenav__category__name">Activities</p>
                                </div>
                            </div>
                        </Link>
                        <Link onClick={()=>setMenu(false)} to="/email">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <MailOutline/>
                                    <p className="sidenav__category__name">Email</p>
                                </div>
                            </div>
                        </Link>

                </div>
            </div>
            </div>
            ):(null)}
            
        </div>
            <div className="sideMenu__display-2"><Sidenav/></div>
        </div>
    )
}

export default Navbar
