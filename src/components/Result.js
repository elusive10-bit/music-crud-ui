import React, { useEffect } from 'react'
import { Button, Col, Row, Card as BootstrapCard } from 'react-bootstrap'
import axios from 'axios'
import playlistApi from '../services/playlist'
import resultsApi from '../services/results'
import styled from 'styled-components'

const Card = styled(BootstrapCard)`
	margin-bottom: 20px;
	border-radius: 10px;
	border: none;
`

const Result = ({
	result,
	results,
	setResults,
	currentPlaylist,
	setPlaylist,
}) => {
	const updateResults = () => {
		const resultToUpdate = results.map((item) => {
			if (item.id === result.id) {
				return {
					...item,
					isAdded: !result.isAdded,
				}
			}
			return item
		})
		setResults(resultToUpdate)

		const updateResult = {
			...result,
			isAdded: !result.isAdded,
		}

		resultsApi.update(result.id, updateResult).then((response) => {
			console.log(response.data)
		})
	}

	const addToPlaylist = () => {
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
		setPlaylist(currentPlaylist.concat(resultObject))

		playlistApi.create(resultObject).then((response) => {
			console.log(response.data)
		})
	}

	const handleClick = () => {
		updateResults()
		addToPlaylist()
	}

	const cardState = result.isAdded ? 'result-added' : 'result-removed'

	return (
		<Col xs={6} md={6} sm={6} lg={4} xl={3}>
			<Card className={`${cardState}`}>
				{/* <div className='card-image'>
					<img src='images/playThumbnail.svg' />
				</div> */}
				<div className='card-image'>
					<img src={result.imgSource} alt='' />
				</div>

				<Row className='card-body'>
					<Col xs={12} sm={8} md={12} lg={12}>
						<Col>
							<h3>{result.name}</h3>
						</Col>
						<Col>
							<h4>by {result.artist}</h4>
						</Col>
					</Col>

					<Col
						xs='auto'
						sm='auto'
						md='auto'
						lg='auto'
						className='button-container'>
						{!result.isAdded ? (
							<Button variant='success' onClick={handleClick}>
								Add
							</Button>
						) : null}
					</Col>
				</Row>
			</Card>
		</Col>
	)
}

export default Result
