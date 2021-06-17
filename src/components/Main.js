import React from 'react'
import Side from './Side'
import Results from './Results'
const Main = ({results, currentPlaylist}) => {
	console.log("Main", results)
	return(
		<div className='main'>
			<Side currentPlaylist={currentPlaylist}/>

			<Results results={results}/>
		</div>
	)
}

export default Main