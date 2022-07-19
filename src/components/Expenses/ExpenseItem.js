import "./ExpenseItem.css";
import { Card } from "../UI/Card";

function ExpenseItem(props) {
    const {title, date, amount} = props;
    
    const month =  date.toLocaleString("en-US", { month: "long"});
    const day =  date.toLocaleString("en-US", { day: "2-digit"});
    const year =  date.getFullYear();
    return (
        <Card className="expense-item">
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;