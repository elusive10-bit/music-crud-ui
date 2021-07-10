import React, { useState, useEffect } from 'react'
import Result from './Result'
import {
	Container as BootstrapContainer,
	Row,
	Form as BootstrapForm,
} from 'react-bootstrap'
import styled from 'styled-components'

const Container = styled(BootstrapContainer)`
	background-color: #fff;
	padding: 20px;
	min-height: 800px;
	.row {
		margin: 0;
	}
`
const ResultsContainer = styled(BootstrapContainer)`
	margin-top: 10px;
	padding-top: 10px;
`

const FormControl = styled(BootstrapForm.Control)`
	border-radius: 5px;
	padding: 10px;
	font-size: 1.1rem;
`

const Results = ({ results, setResults, currentPlaylist, setPlaylist }) => {
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
		<Container noGutter={true}>
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
				<Row noGutter={true}>
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
			</ResultsContainer>
		</Container>
	)
}

export default Results
