import React,{useState}   from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
 
  const [Add,SetAdd]=useState(true)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    
    };
    props.onAddExpense(expenseData);
    SetAdd(true)
   
  };
    
const clickaddhandler=(()=>SetAdd(false))
const RemoveForm=(()=>SetAdd(true))
let content=(<button onClick={clickaddhandler}>Add New Expense</button>)
if(!Add){
  content=(<ExpenseForm
    onSaveExpenseData={saveExpenseDataHandler} delete={RemoveForm}
   
  />)
  
}
  return (
    <div className='new-expense'>
      
      {content}
       
    
    </div>
  );
};

export default NewExpense;