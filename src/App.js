import Nav from './components/Nav'
import Side from './components/Side'
import Results from './components/Results'
import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import resultsApi from './services/results'
import playlistApi from './services/playlist'

const App = () => {
	const [playlist, setPlaylist] = useState([])
	const [results, setResults] = useState([])

	useEffect(() => {
		console.log('Playlist: ', playlist)
		console.log('Results: ', results)
	}, [playlist, results])

	useEffect(() => {
		resultsApi.getAll().then((response) => {
			setResults(response.data)
		})

		playlistApi.getAll().then((response) => {
			setPlaylist(response.data)
		})
	}, [])

	return (
		<div>
			{/* <ToastContainer newestOnTop={true} autoClose={3000} /> */}

			<Container fluid='xl' className='main-container'>
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
						/>
					</Col>

					<Col md={8}>
						<Results
							currentPlaylist={playlist}
							setPlaylist={setPlaylist}
							results={results}
							setResults={setResults}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default App
