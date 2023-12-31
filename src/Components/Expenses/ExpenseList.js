    import React from 'react';
    import ExpenseItem from './ExpenseItem';
    import './ExpenseList.css';
    const ExpenseList=props=>{
    if(props.items.length===0){
        return <h2 className=" expenses-list__fallback">No Expense found.</h2>;
    }
    return (
    <ul className='expense-list'>
    {props.items.map((expense)=>(
        
        <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount}     
        date={expense.date}
        />
    )
        )}</ul>
    )
    
    return(<>   


    </>)
    }
    export default ExpenseList;