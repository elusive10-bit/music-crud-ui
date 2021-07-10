import React from 'react'
import Playlist from './Playlist'
import styled from 'styled-components'
import { Col as BootstrapColumn } from 'react-bootstrap'
const Column = styled(BootstrapColumn)`
	background-color: #fff;
	padding: 20px;
	min-height: 800px;
	border-radius: 8px;

	.col {
		margin: 0;
	}
`

const Side = ({
	currentPlaylist,
	setPlaylist,
	results,
	setResults,
	onStart,
}) => {
	return (
		<Column md='4'>
			<Playlist
				currentPlaylist={currentPlaylist}
				setPlaylist={setPlaylist}
				results={results}
				setResults={setResults}
				onStart={onStart}
			/>
		</Column>
	)
}

export default Side
