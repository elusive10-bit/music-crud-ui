import React, {useState} from 'react'
import Result from './Result'

const Results = ({results, setPlaylist, currentPlaylist}) => {
	const [searchItem, setSearchItem] = useState('')

	const handleChange = (event) => {
		setSearchItem(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log('Results: ', searchItem)
	}
	return (
		<div className='results'>
			<h2>Results</h2>
			<div id='search'>
				<form onSubmit={handleSubmit}>
					<img src='images/search.svg' alt='' />
					<input
						type='text'
						placeholder='Search'
						onChange={handleChange}
						value={searchItem}
					/>
				</form>
			</div>

			<div id='results-container'>
				<div>
					<h1>Results</h1>
				</div>

				<ul>
					{results.map((result) => {
						return (
							<Result
								key={result.id}
								setPlaylist={setPlaylist}
								currentPlaylist={currentPlaylist}
								result={result}
							/>
						) 
					})}
				</ul>
			</div>
		</div>
	)
}

export default Results
