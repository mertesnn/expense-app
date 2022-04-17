import './Expenses.css'
import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
    const [filteredYear, setfilteredYear] = useState('2022')

    const selectedYearHandler = (year) => {
        setfilteredYear(year)
    }

    const filteredExpenses = props.expenses.filter(
        (item) => item.date.getFullYear().toString() === filteredYear
    )

    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onSelectedYear={selectedYearHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    )
}

export default Expenses
