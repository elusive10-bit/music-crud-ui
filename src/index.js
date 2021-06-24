import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import {nanoid} from 'nanoid'
import 'react-toastify/dist/ReactToastify.css'
// import { Map } from 'immutable'



const currentPlaylist = []

const results = [
	{
		id: 'song-' + nanoid(),
		name: 'Gallows Bell',
		artist: 'Vocaloid',
		isAdded: false,
	},
	{id: 'song-' + nanoid(), name: 'Glow', artist: 'Vocaloid', isAdded: false},
	{
		id: 'song-' + nanoid(),
		name: 'Hysteria',
		artist: 'Vocaloid',
		isAdded: false,
	},
	{id: 'song-' + nanoid(), name: 'Mirai e', artist: 'Unknown', isAdded: false},
	{
		id: 'song-' + nanoid(),
		name: 'Crossroads',
		artist: 'Vocaloid',
		isAdded: false,
	},
	{
		id: 'song-' + nanoid(),
		name: 'Now or Never',
		artist: 'Vocaloid',
		isAdded: false,
	},
	{id: 'song-' + nanoid(), name: 'Magenta', artist: 'Vocaloid', isAdded: false},
]

ReactDOM.render(
	<App currentPlaylist={currentPlaylist} results={results} />,
	document.getElementById('root')
)
