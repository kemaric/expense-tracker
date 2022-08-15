import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

export const ExpenseList = (props) => {
    const { items } = props;
    if (items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    } else {
        return (
            <ul className="expenses-list">
               { items.map(expense => (
                <li key={expense.id}>
                    <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    amount={expense.amount}
                    title={expense.title} />
                </li>
                ))}
            </ul>
        );
    }

}