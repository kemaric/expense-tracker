import React from "react";
import { useState } from "react";
import "./ExpenseFilter.css";

export const ExpenseFilter = (props) => {
    const currentYear = new Date().getFullYear();
    const DEFAULT_YEARS =  [...Array(5).keys()].map((_,offset) => currentYear - offset);
    const { years = DEFAULT_YEARS, onFilterChange } = props;
    const [year = '', setYear] = useState(props.yearFilter);

    const onYearFilterChange = (e) => {
        console.log(`Filtered by year`, e.target?.value);
        setYear(e.target?.value);
        if(onFilterChange){
            onFilterChange(e.target?.value);
        }
    }
    return (<div className="expenses-filter">
        <div className="expenses-filter__control">
            <label>Filter by year</label>
            <select value={year} onChange={onYearFilterChange}>
                {years.map(option => {return (<option key={option} value={option}>{option}</option>)})}
            </select>
        </div>
    </div>);
}