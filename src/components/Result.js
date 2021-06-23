import React from 'react'
import { Container, Button, Col, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
const Result = ({
	result,
	results,
	setResults,
	currentPlaylist,
	setPlaylist,
}) => {
	const handleClick = () => {
		const resultObject = {
			id: result.id,
			name: result.name,
			artist: result.artist,
			isAdded: !result.isAdded,
		}

		const resultToUpdate = results.map((item) => {
			if (item.id === result.id) {
				return {...item, isAdded: !result.isAdded}
			}
			return item
		})

		toast.success(`${resultObject.name} is added on playlist`)
		setResults(resultToUpdate)

		setPlaylist(currentPlaylist.concat(resultObject))
	}
	return (
		<div className={`card ${result.isAdded ? 'result-added' : ''}`}>
			{/* <div className='card-image'>
				<img src='images/playThumbnail.svg' />
			</div> */}
				<Row className='card-body'>
					<Col xs={8} sm={8} md={12} lg={12} >
						<h3>{result.name}</h3>
					</Col>

					<Col xs={4} sm='auto' md='auto' lg='auto' class='button-container'>
						{!result.isAdded ? (
							<Button variant='success' onClick={handleClick}>
								Add
							</Button>
						) : (
							null
						)}
					</Col>
				</Row>
		</div>
	)
}

export default Result
