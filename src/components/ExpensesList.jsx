import React from 'react'
import PropTypes from 'prop-types'
import { ExpenseDetail } from './'

const ExpensesList = ({ expenses }) => {
	return (
		<div className='gastos-realizados'>
			<h2>Your Expenses</h2>
			{expenses && (
				expenses.map(expense => 
					<ExpenseDetail 
						key={ expense.id }
						expense={ expense }/>
				)
			)}
		</div>
	)
}

ExpensesList.propTypes = {
	expenses: PropTypes.array.isRequired
}

export { ExpensesList }