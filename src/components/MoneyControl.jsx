import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { checkBudgetPercent } from '../helpers/helper'

const MoneyControl = ({ totalBudget, remainingBudget }) => {
	return (
		<Fragment>
			<div className='alert alert-primary'>
				Total Budget: { totalBudget }
			</div>
			<div className={ checkBudgetPercent(totalBudget, remainingBudget) }>
				Remaining Budget: { remainingBudget }
			</div>
		</Fragment>
	)
}

MoneyControl.propTypes = {
	totalBudget: PropTypes.number.isRequired,
	remainingBudget: PropTypes.number.isRequired
}

export { MoneyControl }