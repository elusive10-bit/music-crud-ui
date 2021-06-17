import React from 'react'

const PlaylistItem = ({playlistItem, setPlaylist, currentPlaylist, results, setResults}) => {
	const handleClick = () => {
		const updatedResults = results.map((item) => {
			if (item.id === playlistItem.id) {
				return {...item, isAdded: !item.isAdded}
			}
			return item
		})

		setResults(updatedResults)
		
		const itemToRemove = currentPlaylist.find(
			(item) => item.id === playlistItem.id
		)
		setPlaylist(currentPlaylist.filter((item) => item.id !== itemToRemove.id))
	}
			
	return(
		<li>
			{playlistItem.name}
			<button onClick={handleClick}>Remove</button>
		</li>
	)
}

export default PlaylistItem