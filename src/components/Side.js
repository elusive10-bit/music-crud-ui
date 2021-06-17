import React from 'react'
import MusicPlayer from './MusicPlayer'
import Playlist from './Playlist'

const Side = ({currentPlaylist, setPlaylist, results, setResults}) => {
	return (
		<div className='side'>
			<MusicPlayer />
			<Playlist
				currentPlaylist={currentPlaylist}
				setPlaylist={setPlaylist}
				results={results}
				setResults={setResults}
			/>
		</div>
	)
}

export default Side
