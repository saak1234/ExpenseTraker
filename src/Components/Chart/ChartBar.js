import React from 'react';
import './ChartBar.css'
const ChartBar=(props)=>{
    let bareFillHeight='0%';
    if (props.maxvalue  >0){
        bareFillHeight=Math.round((props.value/props.maxvalue)*100)+'%';
    }
    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height:bareFillHeight}}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
}
export default ChartBar;