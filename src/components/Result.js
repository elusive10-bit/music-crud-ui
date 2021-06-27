import React from 'react'
import {Button, Col, Row} from 'react-bootstrap'
import {toast} from 'react-toastify'

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
			color: result.color,
			lightFont: result.lightFont,
			imgSource: result.imgSource,
			date: new Date(),
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

	const cardState = result.added ? 'result-added' : 'result-removed'

	return (
		<Col xs={5} md={6} sm={6} lg={4} xl={3}>
			<div className={`card ${cardState}`}>
				{/* <div className='card-image'>
					<img src='images/playThumbnail.svg' />
				</div> */}
				<div className='card-image'>
					<img src={result.imgSource} alt='' />
				</div>

				<Row className='card-body'>
					<Col xs={12} sm={8} md={12} lg={12}>
						<h3>{result.name}</h3>
					</Col>

					<Col
						xs='auto'
						sm='auto'
						md='auto'
						lg='auto'
						className='button-container'
					>
						{!result.isAdded ? (
							<Button variant='success' onClick={handleClick}>
								Add
							</Button>
						) : null}
					</Col>
				</Row>
			</div>
		</Col>
	)
}

export default Result
