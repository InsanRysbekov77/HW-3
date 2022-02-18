import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')
	const [show, setShow] = useState(false)

	const titleChangeHandler = (event) => {
		setTitle(event.target.value)
	}

	const amountChangeHandler = (event) => {
		setAmount(event.target.value)
	}

	const dateChangeHandler = (event) => {
		setDate(event.target.value)
	}

	const submitHandler = (event) => {
		event.preventDefault()

		const expenseData = {
			title: title,
			amount: amount,
			date: new Date(date),
		}
		// console.log(expenseData);
		props.onSaveExpenseData(expenseData)
		setShow(true)
	}
	let content = <button onClick={() => setShow(true)}>Add New Expense</button>
	if (show) {
		content = (
			<>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>Title</label>
						<input
							name='title'
							type='text'
							value={title}
							onChange={titleChangeHandler}
						/>
					</div>
					<div className='new-expense__control'>
						<label>Amount</label>
						<input
							name='amount'
							type='number'
							value={amount}
							onChange={amountChangeHandler}
						/>
					</div>
					<div className='new-expense__control'>
						<label>Date</label>
						<input
							name='date'
							type='date'
							min='2022-01-01'
							value={date}
							onChange={dateChangeHandler}
						/>
					</div>
				</div>
				<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
					<button onClick={() => setShow(false)}>Cancel</button>
				</div>
			</>
		)
	}

	return <form onSubmit={submitHandler}>{content}</form>
}
export default ExpenseForm
