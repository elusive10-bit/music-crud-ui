import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import {ToastContainer, toast} from 'react-toastify'
const PlaylistItem = ({
	playlistItem,
	setPlaylist,
	currentPlaylist,
	results,
	setResults,
}) => {
	const handleClick = () => {
		const updatedResults = results.map((item) => {
			if (item.id === playlistItem.id) {
				return {...item, isAdded: !item.isAdded}
			}
			return item
		})

		setResults(updatedResults)

		const itemToRemove = currentPlaylist.find(
			(item) => item.id === playlistItem.id
		)
		console.log(itemToRemove.name)

		toast.info(`${itemToRemove.name} was removed on Playlist`)
		setPlaylist(currentPlaylist.filter((item) => item.id !== itemToRemove.id))
	}

	return (
		<>
		<Row className='playlist-item'>
			<Col xl={8}>
			{playlistItem.name}
			</Col>
			<Col xl={4}>
			<Button variant='danger' onClick={handleClick}>Remove</Button>
			</Col>
		</Row>
		</>
	)
}

export default PlaylistItem
