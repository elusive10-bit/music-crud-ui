import React from 'react'
import Side from './Side'
import Results from './Results'

const Main = ({results, setResults, currentPlaylist, setPlaylist}) => {
	return (
		<div className='main'>
			<Side
				currentPlaylist={currentPlaylist}
				setPlaylist={setPlaylist}
				results={results}
				setResults={setResults}
			/>

			<Results
				setPlaylist={setPlaylist}
				currentPlaylist={currentPlaylist}
				results={results}
				setResults={setResults}
			/>
		</div>
	)
}

export default Main