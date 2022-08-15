import React from "react";
import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (prop) => {
    const { addExpense } = prop;
    const [isEditExpense, setIsEditExpense] = useState(false);
    const onNewExpense = (e) => {
        const expenseData = {
            ...e,
            date: new Date(e.date),
            amount: e.amount,
            id: Math.random().toString()
        };
        addExpense(expenseData);
    }
    const today = new Date();

    const toggleEdit = () => setIsEditExpense((prev) => !prev);
    
    const onCancelEdit = () => toggleEdit();

    const newExpenseForm = (
        <div className="new-expense">
            <ExpenseForm 
                maxDate={`${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`} 
                onChange={onNewExpense}
                onCancelEdit={onCancelEdit}/>
        </div>
    );
    const defaultView = (
        <div className="new-expense">
            <button onClick={toggleEdit}>Create Expense</button>
        </div>
    );

    return isEditExpense ? newExpenseForm : defaultView;
    
};