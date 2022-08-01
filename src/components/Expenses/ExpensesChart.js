import React from "react";
import { Chart } from "../UI/Chart/Chart";

export const ExpensesChart = (props) => {
    const { expenses = [] } = props;
    const dataPoints = new Array(12)
        .fill(new Date("01-01-2000"))
        .map((d,i) => d.setMonth(i) && { label: d.toString().slice(4,7), value: 0.0});
        
    expenses.forEach((element) => {
        const month = element.date.getMonth();
        dataPoints[month].value += element.amount;
    });
    const maxValue = Math.round(Math.max(...dataPoints.map(dp => dp.value)));
    return (<div>
        <Chart dataPoints={dataPoints} maxValue={maxValue}/>

    </div>)
}