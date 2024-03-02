import './ExpenseForm.css';

const ExpenseForm = () => {

    

    const titleChangeHandler = () => {
       console.log('Title changed!')
    };
    return(
        <form>
            <div className='new-expense__controls'>
              <div className='new-expense__control'>
                  <label>Title</label>
                  <input type='text' onChange={titleChangeHandler} />
              </div>
            </div>

            <div className='new-expense__controls'>
              <div className='new-expense__control'>
                  <label>Amount</label>
                  <input type='number' min = '0.01' step='0.01' />
              </div>
            </div>

            <div className='new-expense__controls'>
              <div className='new-expense__control'>
                  <label>Date</label>
                  <input type='date' min='2024-03-2' max='2025-03-22' />
              </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    );
}

export default ExpenseForm;