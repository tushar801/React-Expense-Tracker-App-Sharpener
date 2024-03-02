import './App.css'
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const App = () => {

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
    
    <div>
      <NewExpense />
      <Expenses items = {expenses} />
      </div>
      
      
      
    
  );
}

export default App
