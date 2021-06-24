import React from 'react'
import Playlist from './Playlist'

const Side = ({currentPlaylist, setPlaylist, results, setResults}) => {
	return (
		<>
			<Playlist
				currentPlaylist={currentPlaylist}
				setPlaylist={setPlaylist}
				results={results}
				setResults={setResults}
			/>
		</>
	)
}

export default Side
