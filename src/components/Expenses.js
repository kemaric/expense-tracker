import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";

export function Expenses(props) {
    const { expenses } = props;
    return (<div className="expenses">
        {expenses.map(expense => (
            <ExpenseItem
            date={expense.date}
            amount={expense.amount}
            title={expense.title} />
        ))}
    </div>)
}

// export default Expenses;