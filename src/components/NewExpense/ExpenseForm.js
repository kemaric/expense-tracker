import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";


export function ExpenseForm(props){
    const currentYear = new Date().getFullYear();
    const { 
        minDate = `${currentYear - 2}-01-01`, 
        maxDate = `${currentYear}-01-02`,
        onChange, onCancelEdit
    } = props;
    const DEFAULT_FORM = {
        title: "",
        amount: 0.0,
        date: new Date(),
    }
    const [tmpExpense, setTmpExpense] = useState({
        ...DEFAULT_FORM,
        ...props.expense,
    });
    

    const onTitleChange = (e) => {
        console.log("Title change", e?.target?.value);
        // Calling setTmpExpense with a function as the input to ensure
        // we have the most up to date expense object. If we simply 
        // called it with the updated object, we could get a race condition.
        setTmpExpense((previousState) =>({
            ...previousState,
            title: e?.target?.value
        }));
    }
    const onAmountChange = (e) => {
        console.log("Amount change", e?.target?.value);
        setTmpExpense((previousState) =>({
            ...previousState,
            amount: +(e?.target?.value)
        }));
        }
    const onDateChange = (e) => {
        console.log("Date change", e?.target?.value);
        setTmpExpense((previousState) =>({
            ...previousState,
            date: e?.target?.value
        }));
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Saving expense", JSON.stringify(tmpExpense));
        setTmpExpense((previousState) => ({...DEFAULT_FORM}));
        onChange(tmpExpense);
    }

    const cancelEdit = () => {
        onCancelEdit();
    }

    return (<form onSubmit={submitHandler}>
        <div className="expense__controls">
            <div className="expense__control">
                <label>Title</label>
                <input type="text" value={tmpExpense?.title} onChange={onTitleChange}/>
            </div>
            <div className="expense__control">
                <label>Amount</label>
                <input type="number" value={tmpExpense?.amount} min="0.01" step="0.01" onChange={onAmountChange}/>
            </div>
            <div className="expense__control">
                <label>Date</label>
                <input type="date" value={tmpExpense?.date} min={minDate} max={maxDate} onChange={onDateChange}/>
            </div>
        </div>
        <div className="expense__actions">
            <button className="expense__action" onClick={cancelEdit}>Cancel</button>
            <button className="expense__action" type="submit">Save Expense</button>
        </div>
    </form>);
}