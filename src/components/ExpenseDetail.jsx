import React from 'react'
import PropTypes from 'prop-types'

const ExpenseDetail = ({ expense }) => {
	return (
		<li className='gastos'>
			<p>
				{expense.name}
				<span className='gasto'>$ {expense.amount}</span>
			</p>
		</li>
	)
}

ExpenseDetail.propTypes = {
	expense: PropTypes.object.isRequired
}

export { ExpenseDetail }