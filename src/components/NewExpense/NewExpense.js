import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const StartEditingHandler = () => {
        setIsEditing(true);
    }
    const StopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={StartEditingHandler}>Add new Expense</button>}
            {isEditing && (<ExpenseForm
                onSaveExpenseData={SaveExpenseDataHandler}
                onCancel={StopEditingHandler} />)}
        </div>);
}
export default NewExpense;
