import React from 'react'

const Playlist = ({currentPlaylist}) => {
	console.log("Playlist: ", currentPlaylist)
	return (
		<div className='playlist'>
			<h2>Current Playlist</h2>
			<ul>
				{
					currentPlaylist.map(playlist => {
						return(
							<li key={playlist.id}>{playlist.name}</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default Playlist
