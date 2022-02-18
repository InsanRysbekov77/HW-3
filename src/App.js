import { useState } from 'react/cjs/react.development'
import './App.css'
import Wrap from './components/expenses/Expense'
import NewExpenses from './components/NewExpenses/NewExpenses'
import Card from './components/UI/Card'
const INIT_STATE = [
	{
		id: '1',
		title: 'Toilet Paper',
		amount: '1.5',
		date: new Date(2022, 3, 5),
	},
	{
		id: '2',
		title: 'Apples',
		amount: '3.5',
		date: new Date(2023, 2, 3),
	},
	{
		id: '3',
		title: 'USA',
		amount: '20000000000000000000',
		date: new Date(2024, 6, 4),
	},
	{
		id: '4',
		title: 'weed',
		amount: '800',
		date: new Date(2025, 9, 1),
	},
]
function App() {
	

	const [expenses, setExpenses] =useState(INIT_STATE)
	



	const addExpenseHandler = (expense) => {
		console.log(expense);

		setExpenses(PrevExpense => {
			return [expense, ...PrevExpense]
		})
	}

	return (
		<Card>
			<NewExpenses onAddExpense={addExpenseHandler}/>
			<Wrap data={expenses} />
		</Card>
	)
}

export default App
