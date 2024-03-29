import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";

const Expenses = (props) => {
    return(
<Card className="expenses">
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
          LocationOfExpenditure={props.items[0].LocationOfExpenditure}
          
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
          LocationOfExpenditure={props.items[1].LocationOfExpenditure}
          
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
          LocationOfExpenditure={props.items[2].LocationOfExpenditure}
          
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
          LocationOfExpenditure={props.items[3].LocationOfExpenditure}
          
        />
      

</Card>
    )
}

export default Expenses;