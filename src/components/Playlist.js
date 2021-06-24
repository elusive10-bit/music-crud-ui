import React from 'react'
import PlaylistItem from './PlaylistItem'
import { sort } from 'fast-sort'
const Playlist = ({currentPlaylist, setPlaylist, results, setResults}) => {
	const sortedPlaylist = sort(currentPlaylist).desc(playlist => playlist.date)


	
	return (
		<>
			<div className='playlist'>
				<h2>Current Playlist</h2>
				<div class='container'>
					<div class='row' >
					{sortedPlaylist.length > 0 
						? sortedPlaylist.map((playlistItem) => (
							<PlaylistItem
							key={playlistItem.id}
							playlistItem={playlistItem}
							currentPlaylist={currentPlaylist}
							setPlaylist={setPlaylist}
							results={results}
							setResults={setResults}
							/>
							))
						: (<h4>Nothing added to playlist</h4>)
					}
						
					</div>

				</div>
			</div>
		</>
	)
}

export default Playlist
