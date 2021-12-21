import { Grid } from '@material-ui/core'
import React from 'react'
import CompletedTasks from '../components/completed_tasks'
import Header from '../components/header'
import ProductsYearlySales from '../components/products_yearly_sales'
import SalesOverview from '../components/sales_overview'
import SalesStatistics from '../components/sales_statistics'
import TotalLead from '../components/total_lead'
import TotalRevenue from '../components/total_revenue'
import TotalSales from '../components/total_sales'
import YearlyProjects from '../components/yearlyprojects'

function DealsDashboard() {
    return (
        <div>
            <Grid spacing={2} container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Header name="Dashboard"/>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <TotalLead/>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <ProductsYearlySales/>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <SalesOverview/>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <TotalSales/>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <TotalRevenue/>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <SalesStatistics/>
                </Grid>
            </Grid>
        </div>
    )
}

export default DealsDashboard
