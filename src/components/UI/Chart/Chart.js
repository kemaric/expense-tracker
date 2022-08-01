import React from "react";
import "./Chart.css";
import { ChartBar } from "./ChartBar";
export const Chart = (props) => {
    const { dataPoints, maxValue } = props;
    return (<div className="chart">
        {dataPoints.map(dataPoint =>
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={maxValue} 
                label={dataPoint.label}
                />)}
    </div>);
} 