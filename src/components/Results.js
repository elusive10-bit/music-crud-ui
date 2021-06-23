import React, {useState} from 'react'
import Result from './Result'
import { Container, Row, Col, Form } from 'react-bootstrap'

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
			<Form id='search' onSubmit={handleSubmit}>
				<Form.Control type='text'
					placeholder='Search'
					onChange={handleChange}
					value={searchItem}>

				</Form.Control>
			</Form>

			<Container className='results-container'>
				<Row>
				{results.map((result) => {
					return (
						<Col md={6} sm={6} lg={4} xl={3}>
							<Result
								key={result.id}
								setPlaylist={setPlaylist}
								currentPlaylist={currentPlaylist}
								result={result}
								results={results}
								setResults={setResults}
							/>
						</Col>
					)
				})}
				</Row>
			</Container>
		</div>
	)
}

export default Results
