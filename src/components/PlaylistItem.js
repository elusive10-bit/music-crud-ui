import React, { useState, useEffect } from 'react'
import { Button, Col } from 'react-bootstrap'
import resultsApi from '../services/results'
import playlistApi from '../services/playlists'
import styled from 'styled-components'

const PlaylistItemColumn = styled(Col)`
	background-color: #fff;
	padding: 10px 10px;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	margin-bottom: 10px;
	margin-right: 10px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	border: 1px solid #aaa;
	/* box-shadow: 1px 1px 2px 1px #999898; */
	color: #000;
	align-items: center;
`

const RemoveButton = styled(Button)`
	margin-top: 10px;
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
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	width: 65px;
`

const PlaylistItem = ({ playlist_item }) => {
	const [noItems, setNoItems] = useState(false)

	useEffect(() => {
		if (playlist_item.length === 0) {
			setNoItems(true)
			console.log(noItems)
		}
	}, [playlist_item.length])
	// const updateResults = (itemToModify) => {
	// 	const updatedResults = results.map((item) => {
	// 		if (item.id === playlistItem.id) {
	// 			return { ...item, isAdded: !item.isAdded }
	// 		}
	// 		return item
	// 	})

	// 	setResults(updatedResults)

	// 	const updateItem = {
	// 		...itemToModify,
	// 		isAdded: false,
	// 	}
	// 	resultsApi.update(itemToModify.id, updateItem).then((response) => {
	// 		console.log(response.data)
	// 	})
	// }

	// const deletePlaylistItem = (id) => {
	// 	playlistApi
	// 		.deleteItem(id)
	// 		.then((response) => {
	// 			console.log(response.data)
	// 		})
	// 		.catch((error) => console.log(error.message))
	// }

	// const handleClick = () => {
	// 	const itemToModify = currentPlaylist.find(
	// 		(item) => item.id === playlistItem.id
	// 	)

	// 	updateResults(itemToModify)

	// 	setPlaylist(currentPlaylist.filter((item) => item.id !== itemToModify.id))

	// 	deletePlaylistItem(itemToModify.id)
	// }

	return (
		<>
			{noItems ? (
				<h5>No Items</h5>
			) : (
				`${playlist_item.name} by ${playlist_item.artist}`
			)}
		</>
	)
}

export default PlaylistItem
