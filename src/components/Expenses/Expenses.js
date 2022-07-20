import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import { Card } from "../UI/Card";
export function Expenses(props) {
    const { list } = props;
    return (<Card className="expenses">
        {list.map(expense => (
            <ExpenseItem
            key={expense.id}
            date={expense.date}
            amount={expense.amount}
            title={expense.title} />
        ))}
    </Card>);
}

// export default Expenses;