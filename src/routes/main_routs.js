import React from 'react'
import {Redirect, Route, Switch } from 'react-router-dom'
import Navbar from '../navbar/navbar'
import DealsDashboard from '../pages/dashboard'
import TaskPage from '../pages/tasks_page'
import ContactPage from '../pages/contact_page'
import CompaniesPage from '../pages/companies_page'
import LeadsPage from '../pages/leads_page'
import DealsPage from '../pages/deals_page'
import ProjectsPage from '../pages/project_page'
import ActivitiesPage from '../pages/activities_page'
import Emaillist from '../pages/email_page'
import ReportsPage from '../pages/reports_page'
import ScrollToTop from './ScrollToTop'


function MainRoutes() {
    return (
        <div className="mainScreen">
            <Navbar/>
            <ScrollToTop/>
            <Switch>
                <Route exact path='/'><DealsDashboard/></Route>
                <Route exact path='/task'><TaskPage/></Route>
                <Route exact path='/contacts'><ContactPage/></Route>
                <Route exact path='/companies'><CompaniesPage/></Route>
                <Route exact path='/leads'><LeadsPage/></Route>
                <Route exact path='/deals'><DealsPage/></Route>
                <Route exact path='/reports'><ReportsPage/></Route>
                <Route exact path='/projects'><ProjectsPage/></Route>
                <Route exact path='/email'><Emaillist/></Route>
                <Route exact path='/activities'><ActivitiesPage/></Route>
                <Redirect to="/"/>
            </Switch>
        </div>
    )
}

export default MainRoutes
