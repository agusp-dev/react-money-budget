import React, { useState, useEffect } from 'react'
import { Question, ExpensesList, NewExpense, MoneyControl } from './components'

function App() {

	const [totalBudget, saveTotalBudget] = useState(0)
	const [remainingBudget, saveRemainingBudget] = useState(0)
	const [showMoneyBudgetQuestion, updateMoneyBudgetQuestion] = useState(true)
	const [expenses, saveExpenses] = useState([])
	const [newExpense, saveNewExpense] = useState({})
	const [createNewExpense, updateCreateNewExpense] = useState(false)

	useEffect(() => {
		if ( createNewExpense ) {
			saveExpenses([
				...expenses,
				newExpense
			])
			saveRemainingBudget( remainingBudget - newExpense.amount )
		}
	}, [newExpense, createNewExpense])

  return (
    <div className="App">
      <div className='container'>
				<header>
					<h1>Weekly Spending</h1>
					<div className='contenido-principal contenido'>
						{showMoneyBudgetQuestion ? (
							<Question 
								saveTotalBudget={ saveTotalBudget }
								saveRemainingBudget={ saveRemainingBudget }
								updateMoneyBudgetQuestion={ updateMoneyBudgetQuestion }/>
						) : (
							<div className='row'>
								<div className='one-half column'>
									<NewExpense
										saveNewExpense={ saveNewExpense }
										updateCreateNewExpense={ updateCreateNewExpense } />
								</div>
								<div className='one-half column'>
									<ExpensesList 
										expenses={ expenses }/>
									<MoneyControl
										totalBudget={ totalBudget }
										remainingBudget={ remainingBudget } />
								</div>
							</div>
						)}
					</div>
				</header>
			</div>
    </div>
  );
}

export default App;
