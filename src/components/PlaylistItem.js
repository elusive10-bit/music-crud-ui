import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import playlistApi from '../services/playlists'
import styled from 'styled-components'

const List = styled.li`
	line-height: 2rem;
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	min-width: 200px;
	max-width: 400px;
	border: 1px solid #aaa;
	border-radius: 3px;
	margin-bottom: 10px;
	padding: 10px;
`

const PlaylistItem = ({ playlists, setPlaylists, playlist, playlist_item }) => {
	const [noItems, setNoItems] = useState(false)

	useEffect(() => {
		if (playlist_item.length === 0) {
			setNoItems(true)
		}
	}, [playlist_item.length])

	const handleClick = async (item_id, playlist_id) => {
		await playlistApi.deleteItemFromPlaylist(item_id, playlist_id)

		const savedPlaylists = await playlistApi.getAllPlaylists()
		setPlaylists(savedPlaylists.data)
	}

	return (
		<List>
			{noItems ? (
				<h5>No Items</h5>
			) : (
				<>
					{playlist_item.name} by {playlist_item.artist}
					<div>
						<Button
							variant='danger'
							onClick={() => handleClick(playlist_item.id, playlist.id)}>
							Remove
						</Button>
					</div>
				</>
			)}
		</List>
	)
}

export default PlaylistItem
