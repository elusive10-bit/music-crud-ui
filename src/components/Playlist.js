import React from 'react'
import PlaylistItem from './PlaylistItem'
import { sort } from 'fast-sort'
import { Col, Container as BootstrapContainer, Row } from 'react-bootstrap'
import styled from 'styled-components'

const PlaylistContainer = styled(BootstrapContainer)`
	margin-top: 20px;
`

const Playlist = ({
	currentPlaylist,
	setPlaylist,
	results,
	setResults,
	onStart,
}) => {
	const sortedPlaylist = sort(currentPlaylist).desc((playlist) => playlist.date)

	return (
		<>
			<div className='playlist'>
				<h2>Current Playlist</h2>
				<PlaylistContainer>
					<Row>
						{sortedPlaylist.length > 0 ? (
							sortedPlaylist.map((playlistItem) => (
								<PlaylistItem
									key={playlistItem.id}
									playlistItem={playlistItem}
									currentPlaylist={currentPlaylist}
									setPlaylist={setPlaylist}
									results={results}
									setResults={setResults}
									onStart={onStart}
								/>
							))
						) : (
							<Col>
								<h4 className='no-result'> (^__^) Nothing added to playlist</h4>
							</Col>
						)}
					</Row>
				</PlaylistContainer>
			</div>
		</>
	)
}

export default Playlist
