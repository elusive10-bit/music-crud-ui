import React, { useState } from 'react'
import {
	Button,
	Col,
	Row,
	Card as BootstrapCard,
	Modal as BootstrapModal,
} from 'react-bootstrap'
import playlistsApi from '../services/playlists'
import resultsApi from '../services/results'
import styled from 'styled-components'

const Modal = styled(BootstrapModal)`
	.modal-body li {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		line-height: 3.2rem;
	}
`

const Card = styled(BootstrapCard)`
	margin-bottom: 20px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;

	.card-image {
		border-radius: 10px;
	}
`

const ButtonColumnContainer = styled(Col)`
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	margin: 0;
`

const Result = ({
	result,
	results,
	setResults,
	playlists,
	setPlaylists,
	user,
}) => {
	const [show, setShow] = useState(false)

	const handleClick = () => {
		setShow(true)
	}

	const handleClose = () => {
		setShow(false)
	}

	const addToPlaylist = async (playlistId, resultId) => {
		await playlistsApi.addToPlaylist(playlistId, resultId)
		const playlistToFind = playlists.find(
			(playlist) => playlist.id === playlistId
		)

		const playlist_items = playlistToFind.playlist_items.concat(result)

		setPlaylists(
			playlists.map((playlist) =>
				playlist.id === playlistId
					? { ...playlistToFind, playlist_items: playlist_items }
					: playlist
			)
		)

		const response = await resultsApi.getAll()

		setResults(response.data)

		setShow(false)
	}

	const cardState = result.isAdded ? 'result-added' : 'result-removed'

	const emptyPlaylist = () => <h4>No playlists added</h4>

	const notEmptyPlaylist = () =>
		playlists.map((playlist) =>
			playlist.playlist_items.find((item) => item.id === result.id) ? (
				<li key={playlist.id}>{playlist.name} (Added)</li>
			) : (
				<li key={playlist.id}>
					{playlist.name}
					<div>
						<Button
							variant='success'
							onClick={() => addToPlaylist(playlist.id, result.id)}>
							Add
						</Button>
					</div>
				</li>
			)
		)

	return (
		<Col xs={6} md={6} sm={6} lg={4} xl={3}>
			<Modal show={show} size='sm' onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Add to Playlists</Modal.Title>
					<Button variant='danger' onClick={handleClose}>
						x
					</Button>
				</Modal.Header>
				<Modal.Body>
					{playlists.length > 0 ? notEmptyPlaylist() : emptyPlaylist()}
				</Modal.Body>
			</Modal>

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

					<ButtonColumnContainer xs='auto' sm='auto' md='auto' lg='auto'>
						<Button variant='success' onClick={handleClick}>
							Add
						</Button>
					</ButtonColumnContainer>
				</Row>
			</Card>
		</Col>
	)
}

export default Result
