import { Box } from '@material-ui/core';
import React from 'react'
import "./chart.css"
import {Bar} from "react-chartjs-2"
import color from '../roots/chart_color'
const bar={
    labels: ['0','100','150','200'],

    datasets:[
        {
        label:'Total Cost',
        data:[
            6,
            18,
            44,
            20,
            25,
            10,
            5
        ],
        backgroundColor:color[0]
        },
        {
        label:'Total Revenue',
        data:[
            36,
            18,
            14,
            23,
            29,
            18,
            15
        ],
        backgroundColor:color[1]
        },
    ]
    }
function SalesStatistics() {
    
    return (
        <div className="chart">
            <h2 className="chart__text">Sales Statistics</h2>
        <Bar
            data={bar}
            
            options={{
                
            
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                    display: true
                    },
                    ticks: {
                        fontColor: "#AEA8A8",
                        fontSize:"10"
                    }
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                    display: true
                    },
                    ticks: {
                        fontColor: "#AEA8A8",
                        fontSize:"10"
                    }
                }]
                }
            }}
        />
        
        </div>
    )
}

export default SalesStatistics;
