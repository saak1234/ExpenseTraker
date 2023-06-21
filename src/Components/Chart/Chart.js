import React from 'react';
import ChartBar from './ChartBar'; 
import './Chart.css'
const Chart=(props)=>{
    const chartDatavalues=props.dataPoints.map((data)=>data.value);
    const totalmaximum= Math.max(...chartDatavalues);
    return <div className="chart">
    {props.dataPoints.map((dataPoint)=>
    <ChartBar 
    key={dataPoint.label}
    value ={dataPoint.value} 
    maxvalue={totalmaximum} 
    label={dataPoint.label}/>
    )}
    </div>

}
export default Chart; 