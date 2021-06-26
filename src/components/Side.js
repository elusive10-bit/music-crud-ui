import React from 'react'
import Playlist from './Playlist'

const Side = ({currentPlaylist, setPlaylist, results, setResults, onStart}) => {
	return (
		<>
			<Playlist
				currentPlaylist={currentPlaylist}
				setPlaylist={setPlaylist}
				results={results}
				setResults={setResults}
				onStart={onStart}
			/>
		</>
	)
}

export default Side
