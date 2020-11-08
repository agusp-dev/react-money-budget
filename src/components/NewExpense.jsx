import React, { Fragment, useState } from 'react'
import { Error } from '.'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

const NewExpense = ({ saveNewExpense, updateCreateNewExpense }) => {

	const [expenseName, saveExpenseName] = useState('')
	const [expenseAmount, saveExpenseAmount] = useState(0)
	const [error, saveError] = useState(false)

	const handleAddExpense = e => {
		e.preventDefault()
		const isError = checkAmount()
		if (isError) return saveError(true)
		//amount ok
		saveError(false)
		const expense = getExpense()
		saveNewExpense(expense)
		updateCreateNewExpense(true)
		resetExpenseFields()
	}

	const getExpense = () => ({ id: nanoid(), name: expenseName, amount: expenseAmount })

	const checkAmount = () => 
		(expenseAmount < 1 || 
			isNaN( expenseAmount ) || 
			expenseName.trim() === '')

	const resetExpenseFields = () => {
		saveExpenseName('')
		saveExpenseAmount(0)
	}

	return (
		<Fragment>
			<h2>New Expense</h2>
			{error && (
				<Error message='Please, put a valid amount!' />
			)}
			<form onSubmit={ handleAddExpense }>
				<div className='campo'>
					<label>Expense Name</label>
					<input 
					 type='text'
					 className='u-full-width'
					 placeholder='Ej: Market'
					 onChange={ e => saveExpenseName(e.target.value) }
					 value={ expenseName }/>
				</div>
				<div className='campo'>
					<label>Expense Amount</label>
					<input 
					 type='number'
					 className='u-full-width'
					 placeholder='Ej: 20'
					 onChange={ e => saveExpenseAmount( parseInt(e.target.value) ) }
					 value={ expenseAmount }/>
				</div>
				<input 
					type="submit"
					className='button-primary u-full-width'
					value='Add Expense'/>
			</form>
		</Fragment>
	)
}

NewExpense.propTypes = {
	saveNewExpense: PropTypes.func.isRequired,
	updateCreateNewExpense: PropTypes.func.isRequired
}

export { NewExpense }