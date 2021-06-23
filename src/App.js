import Nav from './components/Nav'
import Side from './components/Side'
import Results from './components/Results' 
import React, {useState} from "react";
import { Container, Row, Col } from 'react-bootstrap'
import {ToastContainer, toast} from 'react-toastify'
const App = (props) => {
	const [playlist, setPlaylist] = useState(props.currentPlaylist)
	const [results, setResults] = useState(props.results)
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

export default App;
