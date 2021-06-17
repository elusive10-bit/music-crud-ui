import React from 'react'
import Side from './Side'
import Results from './Results'

const Main = ({results, currentPlaylist, setPlaylist}) => {
	console.log("Main", results)
	return (
		<div className='main'>
			<Side currentPlaylist={currentPlaylist} />

			<Results
				setPlaylist={setPlaylist}
				currentPlaylist={currentPlaylist}
				results={results}
			/>
		</div>
	)
}

export default Main