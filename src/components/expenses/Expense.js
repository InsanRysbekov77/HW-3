import React from 'react'
// import ExpenseItem from './ExpenseItem'
import './Expense.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Wrap(props) {
	const [filteredYear, setFilteredYear] = useState('2022')

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	} // метод который используется внутри компоненты ExpenseFilter вызывается как пропс для получения данных

	const filteredExpenses = props.data.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	
	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses}/>
			<ExpensesList expenses={filteredExpenses} />
		</Card>
	)
}

export default Wrap
