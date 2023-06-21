import React, { useState } from 'react';
import ExpenseChart from './ExpenseChart';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredlist=props.items.filter(expense=>{
    return(expense.date.getFullYear().toString()===filteredYear )
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart Expenses={filteredlist}/>
       <ExpenseList items={filteredlist}/>
      
      </Card>
    </div>  
  );
};

export default Expenses;