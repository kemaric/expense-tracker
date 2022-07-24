import React from "react";

import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (prop) => {
    const { addExpense } = prop;
    const onNewExpense = (e) => {
        console.log("Got new expense", e);
        const expenseData = {
            ...e,
            date: new Date(e.date),
            amount: parseFloat(e.amount),
            id: Math.random().toString()
        };
        addExpense(expenseData);
    }
    const today = new Date();
    return (
        <div className="new-expense">
            <ExpenseForm maxDate={`${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`} onChange={onNewExpense}/>
        </div>);
};