import React from 'react'
import "./chart.css"
import {Bar} from "react-chartjs-2"
import color from '../roots/chart_color'
const bar={
    labels: ['Task-1','Task-2','Task-3','Task-4'],

    datasets:[
        {
        label:'Completed',
        data:[
            6,
            38,
            44,
            20,
            15,
            30,
            7
        ],
        backgroundColor:color[0]
        },
        {
        label:'Started',
        data:[
            36,
            18,
            14,
            33,
            29,
            38,
            15
        ],
        backgroundColor:color[1]
        },
    ]
    }
function CompletedTasks() {
    
    return (
        <div className="chart">
            <h2 className="chart__text">Completed Tasks</h2>
        <Bar
            data={bar}
            
            options={{
                
            title:{
                display:false,
                text:"Products Yearly Sales",
                fontSize:20,
                position:"top",
                fontColor:"#1f1f1f"
            },
            legend:{
                display:false,
                position:"right",
                labels: {
                    fontColor: 'rgb(255, 99, 132)',
                }
            },
            plugins: {
                labels: {
                    render: 'value',
                    fontSize: 14,
                    fontStyle: 'bold',
                    fontColor: '#000',
                    fontFamily: '"Lucida Console", Monaco, monospace',
                    
                }
            },
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

export default CompletedTasks;
