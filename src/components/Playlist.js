import React, { useState } from 'react'
import PlaylistItem from './PlaylistItem'
import { sort } from 'fast-sort'
import { toast } from 'react-toastify'
import { Col, Container as BootstrapContainer, Row } from 'react-bootstrap'
import styled from 'styled-components'
import playlistsApi from '../services/playlists'

const PlaylistContainer = styled(BootstrapContainer)`
	margin-top: 20px;
`

const Playlist = ({
	playlists,
	setPlaylists,
	results,
	setResults,
	onStart,
}) => {
	const [playlistName, setPlaylistName] = useState('')

	const handleSubmit = async (event) => {
		event.preventDefault()
		if (playlistName !== '') {
			const newPlaylist = {
				name: playlistName,
			}

			try {
				const savedPlaylist = await playlistsApi.create(newPlaylist)
				setPlaylists(playlists.concat(savedPlaylist.data))
			} catch (exception) {
				console.log(exception.message)
				toast.info('Error detected')
			}
		}
	}

	return (
		<>
			<h2>Playlists</h2>
			{playlists.map((playlist) => (
				<div key={playlist.id}>
					<h2>{playlist.name}</h2>

					{playlist.playlist_items.map((item) => (
						<PlaylistItem playlist_item={item} key={item.id} />
					))}
				</div>
			))}
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={playlistName}
					onChange={({ target }) => setPlaylistName(target.value)}
				/>
				<button type='submit'>Add Playlist</button>
			</form>
		</>
	)
}

export default Playlist
