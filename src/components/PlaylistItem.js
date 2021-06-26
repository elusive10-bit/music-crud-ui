import React from 'react'
import {Button, Col} from 'react-bootstrap'


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
		setPlaylist(currentPlaylist.filter((item) => item.id !== itemToRemove.id))
	}


	return (
		<>
		<Col xs={5} sm={3} md={12} className='playlist-item'>
			<Col xs={12} md={4}>
			<h4>
			{playlistItem.name}
			</h4>
			</Col>
			<Col sm={4} lg={4}>
				<img src={playlistItem.imgSource} alt=''/>
			</Col>

			<Col xs='auto' md='auto' className='button-container'>
			<Button variant='danger' onClick={handleClick}>Remove</Button>
			</Col>
		</Col>
		</>
	)
}

export default PlaylistItem
