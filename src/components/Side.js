import React from 'react'
import Playlist from './Playlist'
import styled from 'styled-components'
import { Col as BootstrapColumn } from 'react-bootstrap'
const Column = styled(BootstrapColumn)`
	background-color: #3eb265;
	color: #fff;
	padding: 20px;
	min-height: 800px;
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
