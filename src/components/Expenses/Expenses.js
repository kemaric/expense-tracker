import React from "react";
import { useState } from "react";
import "./Expenses.css"
import { Card } from "../UI/Card";
import { ExpenseFilter } from "../ExpenseFilter/ExpenseFilter";
import { ExpenseList } from "./ExpenseList";
import { ExpensesChart } from "./ExpensesChart";

export function Expenses(props) {
    const { list } = props;
    const [selectedFilter, setFilter] = useState('2020');

    const filteredList = list.filter(item => item.date.getFullYear().toString() === selectedFilter);
    const yearOptions =  Array.from(new Set(["2020", "2019", "2022",...list.map(expense => expense.date.getFullYear().toString())])).sort();
    const onUpdateFilter = (year) => {
        setFilter(year);
    }

    // const noExpenses = (<div className="expenses">No expenses found</div>);
    
    return (<Card className="expenses">
        <div>
            <ExpenseFilter yearFilter={selectedFilter} 
            years={yearOptions}
            onFilterChange={onUpdateFilter}/>
        </div>
        <ExpensesChart expenses={filteredList}/>
        <ExpenseList items={filteredList}/>
    </Card>);
}

