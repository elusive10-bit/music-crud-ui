import React from 'react'

const Result = ({result, results, setResults, currentPlaylist, setPlaylist}) => {
	
	const handleClick = () => {
		const resultObject = {
			id: result.id,
			name: result.name,
			artist: result.artist,
			isAdded: !result.isAdded
		}
		
		const resultToUpdate = results.map(item => {
			if(item.id === result.id) {
				return {...item, isAdded: !result.isAdded}
			}
			return item
		})

		setResults(resultToUpdate)

		setPlaylist(currentPlaylist.concat(resultObject))
	}
	return (
		<li>
			{result.name}
			{!result.isAdded ? <button onClick={handleClick}><img src='/images/add.svg/'/></button> : <span className="alreadyAdded"> (Song already added to playlist) </span> }
			
		</li>
	)
}

export default Result
