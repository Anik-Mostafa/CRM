import React from 'react';
import {Pie} from 'react-chartjs-2';
import color from '../roots/chart_color'
const data = {
	labels: [
		'Asia',
		'Europe',
	],
	datasets: [{
		data: [30, 350],
		backgroundColor: [
            color[0],
            color[1],
		],
		hoverBackgroundColor: [
        color[0],
		color[1],
		]
	}]
};

function TotalLead(){

    return (
        <div className="chart">
            <h2 className="chart__text">Pie Example</h2>
            <Pie data={data} 
            
        />
        </div>
    );
};
export default TotalLead;