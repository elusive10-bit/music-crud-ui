import React, {useState} from 'react'
import Result from './Result'

const Results = ({results, setResults, currentPlaylist, setPlaylist}) => {
	const [searchItem, setSearchItem] = useState('Vocaloid')

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
			<form id='search' onSubmit={handleSubmit}>
				<img src='images/search.svg' alt='' />
				<input
					type='text'
					placeholder='Search'
					onChange={handleChange}
					value={searchItem}
				/>
			</form>


			<div className='results-container'>
					{results.map((result) => {
						return (
							<Result
								key={result.id}
								setPlaylist={setPlaylist}
								currentPlaylist={currentPlaylist}
								result={result}
								results={results}
								setResults={setResults}
								
							/>
						) 
					})}
			</div>
		</div>
	)
}

export default Results
