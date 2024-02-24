import './App.css'
import  ExpenseItem  from './Components/ExpenseItem'

function App() {

  const expenses = [
    {id: 'e1', 
     title: 'Food',
     amount: 234,
     date: new Date(2024, 2, 23),
     LocationOfExpenditure: 'Restaurant',
     
    },

    {id: 'e2', 
    title: 'Shopping',
    amount: 1000,
    date: new Date(2024, 2, 12),
    LocationOfExpenditure: 'Mall',
    
   },

   {id: 'e3', 
   title: 'Car',
   amount: 4000,
   date: new Date(2024, 2, 13),
   LocationOfExpenditure: 'Showroom',
   
  },

  {id: 'e4', 
  title: 'Travel',
  amount: 504,
  date: new Date(2024, 2, 20),
  LocationOfExpenditure: 'Ladakh',
  
 }
  ];

  return (
    <>
      <h2>Let's get started!</h2>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          LocationOfExpenditure={expense.LocationOfExpenditure}
          
        />
      ))}
      
    </>
  )
}

export default App
