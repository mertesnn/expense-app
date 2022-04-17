import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'
const NewExpense = (props) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const startExpand = () => {
        setIsExpanded(true)
    }

    const stopExpand = () => {
        setIsExpanded(false)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        stopExpand()
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            {!isExpanded ? (
                <div style={{ textAlign: 'center' }}>
                    <button onClick={startExpand}>Add Expense</button>
                </div>
            ) : (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopExpand}
                />
            )}
        </div>
    )
}

export default NewExpense
