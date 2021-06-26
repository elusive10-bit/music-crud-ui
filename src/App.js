import Nav from './components/Nav'
import Side from './components/Side'
import Results from './components/Results'
import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'

const App = () => {
	const [playlist, setPlaylist] = useState([])
	const [results, setResults] = useState([])
	const [onStart, setOnStart] = useState(true)

	useEffect(() => {
		console.log('Playlist: ', playlist)
		console.log('Results: ', results)
	}, [playlist, results])

	useEffect(() => {
		axios.get('http://localhost:3001/results').then((response) => {
			setResults(response.data)
		})

		axios.get('http://localhost:3001/current-playlist').then((response) => {
			setPlaylist(response.data)
		})
	}, [])

	return (
		<div>
			{/* <ToastContainer newestOnTop={true} autoClose={3000} /> */}

			<Container className='main-container'>
				<Row>
					<Nav />
				</Row>

				<Row gx={5}>
					<Col className='side' md={4}>
						<Side
							currentPlaylist={playlist}
							setPlaylist={setPlaylist}
							results={results}
							setResults={setResults}
							onStart={onStart}
						/>
					</Col>

					<Col md={8}>
						<Results
							currentPlaylist={playlist}
							setPlaylist={setPlaylist}
							results={results}
							setResults={setResults}
							onStart={onStart}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default App
