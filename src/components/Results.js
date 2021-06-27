import React, {useState, useEffect} from 'react'
import Result from './Result'
import {Container, Row, Form} from 'react-bootstrap'

const Results = ({results, setResults, currentPlaylist, setPlaylist}) => {
	const [searchItem, setSearchItem] = useState('')
	const [filteredResults, setFilteredResults] = useState([])
	useEffect(() => {
		console.log(results)
		console.log(filteredResults)
	}, [results, filteredResults])

	useEffect(() => {
		const pattern = new RegExp(searchItem, 'i')
		console.log('Pattern', pattern)
		setFilteredResults(
			results.filter((result) => {
				if (pattern.test(result.name) || pattern.test(result.artist)) {
					return result
				}
				return null
			})
		)
	}, [searchItem, results])

	const handleChange = (event) => {
		setSearchItem(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		// console.log('Results: ', searchItem)
	}

	const resultsCounter = filteredResults.length
	return (
		<div className='results'>
			<h2>Results</h2>
			<Form id='search' onSubmit={handleSubmit}>
				<Form.Control
					type='text'
					placeholder='Search'
					onChange={handleChange}
					value={searchItem}
					autocomplete='off'
				></Form.Control>
			</Form>

			<Container className='results-container'>
				<Row>
					<h3>
						{resultsCounter > 0 ? resultsCounter : 'No'}{' '}
						{resultsCounter > 1 ? `results` : 'result'} found
					</h3>
					{filteredResults.length > 0
						? filteredResults.map((result) => {
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
						  })
						: ''}
				</Row>
			</Container>
		</div>
	)
}

export default Results
