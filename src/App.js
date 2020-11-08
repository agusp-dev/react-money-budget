import React, { useState } from 'react'
import { Question, Expenses } from './components'

function App() {

	const [totalBudget, saveTotalBudget] = useState(0)
	const [remainingBudget, saveRemainingBudget] = useState(0)
	const [showMoneyBudgetQuestion, updateMoneyBudgetQuestion] = useState(true)
	const [expenses, saveExpenses] = useState([])

	const saveNewExpense = expense => {
		saveExpenses([
			...expenses,
			expense
		])
	}

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
									<Expenses
										saveNewExpense={ saveNewExpense } />
								</div>
								<div className='one-half column'>
									2
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
