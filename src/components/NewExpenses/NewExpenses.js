import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
const NewExpenses = (props) => {


	const SaveExpenseDataHandler = (enteredExpenseData) =>{
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		}
		// console.log(expenseData);
		props.onAddExpense(expenseData)
	}

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}/>
		</div>
	)
}
export default NewExpenses
