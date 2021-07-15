import React from 'react'
import Playlist from './Playlist'
import styled from 'styled-components'
import { Col as BootstrapColumn } from 'react-bootstrap'
const Column = styled(BootstrapColumn)`
	background-color: #fff;
	padding: 20px;
	min-height: 200px;
	border-right: 1px solid #aaa;
`

const Side = ({ playlists, setPlaylists, results, setResults, onStart }) => {
	return (
		<Column md='4' xs='12'>
			<Playlist
				playlists={playlists}
				setPlaylists={setPlaylists}
				results={results}
				setResults={setResults}
				onStart={onStart}
			/>
		</Column>
	)
}

export default Side
