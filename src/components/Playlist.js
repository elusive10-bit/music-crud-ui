import React, { useState } from 'react'
import PlaylistItem from './PlaylistItem'
import { toast } from 'react-toastify'
import { Button, Form as BootstrapForm } from 'react-bootstrap'
import styled from 'styled-components'
import playlistsApi from '../services/playlists'

const Form = styled(BootstrapForm)`
	display: flex;

	button {
		margin-left: 10px;
	}
`

const PlaylistContainer = styled.div`
	margin-bottom: 20px;
	border-bottom: 1px solid #aaa;
	padding: 10px;

	button {
		margin-left: 10px;
	}
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
				setPlaylistName('')
			} catch (exception) {
				console.log(exception.message)
				toast.info('Error detected')
			}
		}
	}

	return (
		<>
			<h2>Playlists</h2>
			<hr />
			{playlists.map((playlist) => (
				<PlaylistContainer key={playlist.id}>
					<h3>{playlist.name}</h3>

					{playlist.playlist_items.map((item) => (
						<PlaylistItem
							playlist={playlist}
							playlists={playlists}
							setPlaylists={setPlaylists}
							playlist_item={item}
							key={item.id}
						/>
					))}
				</PlaylistContainer>
			))}
			<Form onSubmit={handleSubmit}>
				<div>
					<Form.Control
						type='text'
						value={playlistName}
						onChange={({ target }) => setPlaylistName(target.value)}
					/>
				</div>
				<div>
					<Button variant='success' type='submit'>
						Add Playlist
					</Button>
				</div>
			</Form>
		</>
	)
}

export default Playlist
