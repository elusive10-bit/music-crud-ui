import React from 'react'

const Result = ({result, currentPlaylist, setPlaylist}) => {
	
	const handleClick = () => {
		const resultObject = {
			id: result.id,
			name: result.name,
			artist: result.artist,
			isAdded: !result.isAdded
		}
		result.map(result => {
			return {...result, isAdded: !result.isAdded}
		})
		setPlaylist(currentPlaylist.concat(resultObject))
		console.log(currentPlaylist)
	}
	return (
		<li>
			{result.name}
			{!result.isAdded ? <button onClick={handleClick}>Add to current Playlist</button> : "(Song already added to playlist)" }
			
		</li>
	)
}

export default Result
