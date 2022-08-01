import React from "react";
import "./ChartBar.css";

export const ChartBar = (props) => {
    const {maxValue, value, label} = props;
    const fillValue =  `${(maxValue > 0 ? Math.round((value / maxValue) * 100) : 0)}%`;
    
    return (<div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height: fillValue}}></div>
        </div>
        <label className="chart-bar__label">{ label || 'Test'}</label>
    </div>);
}