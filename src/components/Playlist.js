import React from 'react'
import PlaylistItem from './PlaylistItem'
const Playlist = ({currentPlaylist, setPlaylist, results, setResults}) => {
	return (
		<>
			<div className='playlist'>
				<h2>Current Playlist</h2>
				<div class='container'>
					<div class='row'>
					{currentPlaylist.map((playlistItem) => (
						<PlaylistItem
							key={playlistItem.id}
							playlistItem={playlistItem}
							currentPlaylist={currentPlaylist}
							setPlaylist={setPlaylist}
							results={results}
							setResults={setResults}
						/>
					))}
						
					</div>

				</div>
			</div>
		</>
	)
}

export default Playlist
