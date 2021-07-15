import React, { useState, useEffect } from 'react'
import Result from './Result'
import {
	Container as BootstrapContainer,
	Row,
	Form as BootstrapForm,
} from 'react-bootstrap'
import styled from 'styled-components'

const ResultsContainer = styled(BootstrapContainer)`
	margin-top: 10px;
	padding-top: 10px;
`

const FormControl = styled(BootstrapForm.Control)`
	border-radius: 5px;
	padding: 10px;
	font-size: 1.1rem;
	border: 1px solid #999;
`

const Results = ({
	results,
	setResults,
	currentPlaylist,
	setPlaylist,
	user,
}) => {
	const [searchItem, setSearchItem] = useState('')
	const [filteredResults, setFilteredResults] = useState([])

	useEffect(() => {
		const pattern = new RegExp(searchItem, 'i')
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
		<>
			<h2>Results</h2>
			<BootstrapForm id='search' onSubmit={handleSubmit}>
				<FormControl
					type='text'
					placeholder='Search'
					onChange={handleChange}
					value={searchItem}
					autoComplete='off'></FormControl>
			</BootstrapForm>

			<ResultsContainer>
				<Row noGutters={true}>
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
										user={user}
									/>
								)
						  })
						: ''}
				</Row>
			</ResultsContainer>
		</>
	)
}

export default Results
