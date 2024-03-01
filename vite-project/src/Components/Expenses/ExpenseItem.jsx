
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react'

const ExpenseItem = (props) => { 
  
const [title, setTitle] = useState(props.title);
const[expense, setExpense] = useState(props.amount);

const  changeExpense = () => {
setExpense('100$')
}

  const clickHandler = () => {
    setTitle('Updated!');
    console.log('Clicked!!!!!');
  }

const deleteExpenseHandler = () => {

  const expenseItem = document.querySelector('.expense-item');
  expenseItem.remove();

}  

 return (

    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <h2>{props.LocationOfExpenditure} </h2>
        <div className='expense-item__price'>${expense}</div>
        </div>
        <button onClick={changeExpense}>Change Expense</button>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </Card>
  )
}

export default ExpenseItem;
