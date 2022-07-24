import React from "react";
import { useState } from "react";
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import { Card } from "../UI/Card";
import { ExpenseFilter } from "../ExpenseFilter/ExpenseFilter";

export function Expenses(props) {
    const { list } = props;
    const [filteredList = [], setFilteredList] = useState(list);
    const [selectedFilter, setFilter] = useState('');
    // const [yearFilters, setYearFilters] = useState(null);

    const onUpdateFilter = (e) => {
        const newFilter = parseInt(e);
        setFilter(e => { 
            return newFilter; 
        });
        setFilteredList((previous = []) => {
            return previous.filter(item => item.date.getFullYear() === newFilter)
        });
    }
    return (<Card className="expenses">
        <div>
            <ExpenseFilter yearFilter={selectedFilter} onFilterChange={onUpdateFilter}/>
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

