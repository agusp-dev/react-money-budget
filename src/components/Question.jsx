import React, { Fragment, useState } from 'react'

const Question = () => {

	const [count, saveCount] = useState(0)
	const [error, saveError] = useState(false)

	const setMoneyBudget = e => {
		saveCount( parseInt( e.target.value ) )
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (count < 1 || isNaN( count )) {
			saveError(true)
		} else {
			saveError(false)
		}
	}

	return (
		<Fragment>
			<h2>Your money budget</h2>
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

export { Question }