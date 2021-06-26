import React from 'react'
import PlaylistItem from './PlaylistItem'
import { sort } from 'fast-sort'
import { Col, Container, Row } from 'react-bootstrap'
const Playlist = ({currentPlaylist, setPlaylist, results, setResults}) => {
	const sortedPlaylist = sort(currentPlaylist).desc(playlist => playlist.date)
	
	return (
		<>
			<div className='playlist'>
				<h2>Current Playlist</h2>
				<Container className='playlist-container'>
				<Row>
					{sortedPlaylist.length > 0 
						? sortedPlaylist.map((playlistItem) => (
							<PlaylistItem
							key={playlistItem.id}
							playlistItem={playlistItem}
							currentPlaylist={currentPlaylist}
							setPlaylist={setPlaylist}
							results={results}
							setResults={setResults}
							/>
							))
						: (<Col><h4 className='no-result'> (^__^) Nothing added to playlist</h4></Col>)
					}
				</Row>

				</Container>
					
			</div>
		</>
	)
}

export default Playlist
