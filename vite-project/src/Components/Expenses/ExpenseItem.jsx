import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => { 
  
  const clickHandler = () =>{
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
        <h2>{props.title}</h2>
        <h2>{props.LocationOfExpenditure} </h2>
        <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </Card>
  )
}

export default ExpenseItem;
