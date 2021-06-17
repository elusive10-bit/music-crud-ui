import React from 'react'
import MusicPlayer from './MusicPlayer'
import Playlist from './Playlist'

const Side = ({currentPlaylist}) => {
	return(
		<div className='side'>
				<MusicPlayer />
				<Playlist currentPlaylist={currentPlaylist}/>
		</div>
		
	)
}

export default Side