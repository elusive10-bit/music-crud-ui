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
		<Col xs={3} sm={3} md={12} className='playlist-item'>
			<Col xs={12} md={8}>
			{playlistItem.name}
			</Col>
			<Col xs='auto' md='auto'>
			<Button variant='danger' onClick={handleClick}>Remove</Button>
			</Col>
		</Col>
		</>
	)
}

export default PlaylistItem
