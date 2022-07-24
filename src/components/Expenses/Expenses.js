import React from "react";
import { useState } from "react";
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import { Card } from "../UI/Card";
import { ExpenseFilter } from "../ExpenseFilter/ExpenseFilter";

export function Expenses(props) {
    const { list } = props;
    const [selectedFilter, setFilter] = useState('2020');

    const filteredList = list.filter(item => item.date.getFullYear().toString() === selectedFilter);
    const yearOptions =  Array.from(new Set(list.map(expense => expense.date.getFullYear().toString())));
    const onUpdateFilter = (year) => {
        setFilter(year);
    }
    return (<Card className="expenses">
        <div>
            <ExpenseFilter yearFilter={selectedFilter} 
            years={yearOptions}
            onFilterChange={onUpdateFilter}/>
        </div>
        {filteredList.map(expense => (
            <ExpenseItem
            key={expense.id}
            date={expense.date}
            amount={expense.amount}
            title={expense.title} />
        ))}
    </Card>);
}

