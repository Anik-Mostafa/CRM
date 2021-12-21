import { AccountTree, Assessment,  AssignmentTurnedIn,Dashboard, LocalActivity, LocationCity,  MailOutline, PermContactCalendar, PermIdentity, WifiTethering } from '@material-ui/icons'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
    return (
        <div>
            <div className="sidenav">
                <div style={{height:"100%"}} className="sidenav__scroll">

                    {/* main */}


                    <p className="sidenav__title">Main</p>
                    
                        <Link to="/">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <Dashboard/>
                                    <p className="sidenav__category__name">Dashboard</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/task">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <AssignmentTurnedIn/>
                                    <p className="sidenav__category__name">Tasks</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/contacts">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <PermContactCalendar/>
                                    <p className="sidenav__category__name">Contacts</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/companies">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <LocationCity/>
                                    <p className="sidenav__category__name">Companies</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/leads">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <PermIdentity/>
                                    <p className="sidenav__category__name">Leads</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/deals">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <WifiTethering/>
                                    <p className="sidenav__category__name">Deals</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/projects">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <AccountTree/>
                                    <p className="sidenav__category__name">Projects</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/reports">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <Assessment/>
                                    <p className="sidenav__category__name">Reports</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/activities">
                            <div className="sidenav__category">
                                <div  className="sidenav__category__text">
                                    <LocalActivity/>
                                    <p className="sidenav__category__name">Activities</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/email">
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
    )
}

export default Sidenav
