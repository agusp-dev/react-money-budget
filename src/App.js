import { Question } from './components'

function App() {
  return (
    <div className="App">
      <div className='container'>
				<header>
					<h1>Weekly Spending</h1>
					<div className='contenido-principal contenido'>
						<Question />
					</div>
				</header>
			</div>
    </div>
  );
}

export default App;
