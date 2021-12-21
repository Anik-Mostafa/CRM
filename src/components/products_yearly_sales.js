import { Box } from '@material-ui/core';
import React from 'react'
import "./chart.css"
import {HorizontalBar} from "react-chartjs-2"
import color from '../roots/chart_color'
const bar={
    labels: ['2006','2007','2008','2009','2010','2011'],

    datasets:[
        {
        label:'Product',
        data:[
            6,
            18,
            44,
            20,
            25,
            10,
            5
        ],
        backgroundColor:[color[0],color[1],color[2],color[3],color[4]]
        },
    ]
    }
function ProductsYearlySales() {
    
    return (
        <div className="chart">
        <h2 className="chart__text">Products Yearly Sales</h2>
    <HorizontalBar
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

export default ProductsYearlySales;
