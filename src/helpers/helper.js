export const checkBudgetPercent = ( totalBudget, remainingBudget ) => {
	const expensesPercent = remainingBudget * 100 / totalBudget
	if ( expensesPercent < 25 ) {
		return 'alert alert-danger'
	} else if ( expensesPercent < 50 ) {
		return 'alert alert-warning'
	} else {
		return 'alert alert-success'
	}
}