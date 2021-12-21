import React from 'react'
import {Line} from "react-chartjs-2"
import color from '../roots/chart_color'
const chartData={
labels: ['2006','2007','2008','2009','2010','2011'],
datasets:[
    {
    label:'Total Sales',
    data:[
        6,
        18,
        16,
        20,
        25,
        10,
    ],
    borderColor: color[0],
    fill: false,
    },
    {
    label:'Total Revenue',
    data:[
        16,
        8,
        26,
        20,
        15,
        57,
        ],
        fill: false,
        borderColor: color[1],
    }
    ]
}
function SalesOverview() {
    return (
        <div className="chart" >
            <h2 className="chart__text">Products Yearly Sales</h2>

        <Line
        backgroundColor="blue"
        type="line"
            data={chartData}
            options={{
            title:{
                display:false,
                text:'Sales Overview',
                fontSize:18,
                position:"bottom",
                fontColor:"black"
            },
            legend:{
                display:false,
                position:"right"
            },
            scales: {
                xAxes: [{
                display: true,
                gridLines: {
                    display: false
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

export default  SalesOverview;
