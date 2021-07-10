import axios from 'axios'
import React from 'react'
import { Button, Col } from 'react-bootstrap'
import resultsApi from '../services/results'
import playlistApi from '../services/playlist'
import styled from 'styled-components'

const PlaylistItemColumn = styled(Col)`
	background-color: #fff;
	padding: 10px 10px;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	margin-bottom: 10px;
	margin-right: 10px;
	border-radius: 10px;
	box-shadow: 2px 2px 5px 1px #317c4a;
	color: #000;
	align-items: center;
`

const PlaylistItemName = styled.h4`
	font-size: 1rem;
	font-weight: 600;
`

const PlaylistItemArtist = styled.h5`
	font-size: 0.9rem;
	font-weight: 400;
`

const PlaylistItemImage = styled.img`
	border-radius: 5px;
	width: 65px;
`

const PlaylistItem = ({
	playlistItem,
	setPlaylist,
	currentPlaylist,
	results,
	setResults,
	onStart,
}) => {
	const updateResults = (itemToModify) => {
		const updatedResults = results.map((item) => {
			if (item.id === playlistItem.id) {
				return { ...item, isAdded: !item.isAdded }
			}
			return item
		})

		setResults(updatedResults)

		const updateItem = {
			...itemToModify,
			isAdded: false,
		}
		resultsApi.update(itemToModify.id, updateItem).then((response) => {
			console.log(response.data)
		})
	}

	const deletePlaylistItem = (id) => {
		playlistApi
			.deleteItem(id)
			.then((response) => {
				console.log(response.data)
			})
			.catch((error) => console.log(error.message))
	}

	const handleClick = () => {
		const itemToModify = currentPlaylist.find(
			(item) => item.id === playlistItem.id
		)

		updateResults(itemToModify)

		setPlaylist(currentPlaylist.filter((item) => item.id !== itemToModify.id))

		deletePlaylistItem(itemToModify.id)
	}

	return (
		<>
			<PlaylistItemColumn xs={5} sm={3} md={12}>
				<Col xs={12} md={4}>
					<Col>
						<PlaylistItemName>{playlistItem.name}</PlaylistItemName>
					</Col>
					<Col>
						<PlaylistItemArtist>by {playlistItem.artist}</PlaylistItemArtist>
					</Col>
				</Col>

				<Col sm={4} lg={4}>
					<PlaylistItemImage src={playlistItem.imgSource} alt='' />
				</Col>
				<Col xs='auto' md='auto' className='button-container'>
					<Button variant='danger' onClick={handleClick}>
						Remove
					</Button>
				</Col>
			</PlaylistItemColumn>
		</>
	)
}

export default PlaylistItem
