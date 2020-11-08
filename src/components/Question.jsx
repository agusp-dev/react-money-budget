import React, { Fragment, useState } from 'react'
import { Error } from '../components'
import PropTypes from 'prop-types'

const Question = ({ 
	saveTotalBudget, 
	saveRemainingBudget,
	updateMoneyBudgetQuestion
}) => {

	const [amount, saveAmount] = useState(0)
	const [error, saveError] = useState(false)

	const setMoneyBudget = e => {
		saveAmount( parseInt( e.target.value ) )
	}

	const handleSubmit = e => {
		e.preventDefault()
		const isError = checkAmount()
		if (isError) return saveError(true)
		//amount ok
		saveError(false)
		saveTotalBudget(amount)
		saveRemainingBudget(amount)
		updateMoneyBudgetQuestion(false)
	}

	const checkAmount = () => (amount < 1 || isNaN( amount ))

	return (
		<Fragment>
			<h2>Your money budget</h2>
			{error && (
				<Error message='An Error Ocurred!'/>
			)}
			<form onSubmit={ handleSubmit }>
				<input 
					type='number'
					className='u-full-width'
					placeholder='Insert your money budget'
					onChange={ setMoneyBudget }/>
				<input 
					type='submit'
					className='button-primary u-full-width'/>
			</form>
		</Fragment>
	)
}

Question.propTypes = {
	saveTotalBudget: PropTypes.func.isRequired,
	saveRemainingBudget: PropTypes.func.isRequired,
	updateMoneyBudgetQuestion: PropTypes.func.isRequired
}

export { Question }