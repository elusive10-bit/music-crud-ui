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
		<div className="card">
			<div className="card-image">
				<img src="images/playThumbnail.svg"/>
			</div>

			<div className="card-body">
				<h3>
				{result.name}
				</h3>
				
				<div className="button-container">
				{!result.isAdded ? <button onClick={handleClick}>add</button> : <span className="alreadyAdded"> (added) </span> }
				</div>
						
			</div>
			
			
		</div>
	)
}

export default Result
