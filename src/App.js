import Nav from './components/Nav'
import Side from './components/Side'
import Results from './components/Results'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import React, { useState, useEffect } from 'react'
import { Container as BootstrapContainer, Row, Col } from 'react-bootstrap'
import resultsApi from './services/results'
import styled from 'styled-components'

const Container = styled(BootstrapContainer)``

const AppContainer = styled.div`
	display: flex;
	flex-flow: column wrap;

	padding-top: ${(props) => (props.isLoggedIn ? '0px' : '200px')};
`
const ResultsColumn = styled(Col)`
	margin-left: 0;
	background-color: #fff;
	padding: 20px;
	@media (max-width: 768px) {
		margin-top: 10px;
	}
`

const App = () => {
	const [playlist, setPlaylist] = useState([])
	const [results, setResults] = useState([])
	const [isLoggedIn, setIsLoggedIn] = useState(true)
	const [isRegistered, setIsRegistered] = useState(true)
	const [user, setUser] = useState('')

	console.log(user)

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('loggedInUser')

		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON)
			setUser(user)
			setIsLoggedIn(true)
		}

		console.log(loggedUserJSON)
	}, [])

	useEffect(() => {
		resultsApi.getAll().then((response) => {
			setResults(response.data)
		})

		resultsApi.getAllSelected().then((response) => {
			setPlaylist(response.data)
		})
	}, [])

	const mainContainer = (
		<Container fluid='xl' className='main-container'>
			<Row className='row-2'>
				<Nav
					isLoggedIn={isLoggedIn}
					setIsLoggedIn={setIsLoggedIn}
					user={user}
					setUser={setUser}
				/>
			</Row>

			<Row xs={12} noGutters={true}>
				<Side
					currentPlaylist={playlist}
					setPlaylist={setPlaylist}
					results={results}
					setResults={setResults}
				/>

				<ResultsColumn md={8}>
					<Results
						currentPlaylist={playlist}
						setPlaylist={setPlaylist}
						results={results}
						setResults={setResults}
					/>
				</ResultsColumn>
			</Row>
		</Container>
	)

	return (
		<AppContainer isLoggedIn={isLoggedIn}>
			{isLoggedIn ? (
				mainContainer
			) : !isRegistered ? (
				<RegisterForm
					isRegistered={isRegistered}
					setIsRegistered={setIsRegistered}
				/>
			) : (
				<LoginForm
					isRegistered={isRegistered}
					setIsRegistered={setIsRegistered}
					isLoggedIn={isLoggedIn}
					setIsLoggedIn={setIsLoggedIn}
				/>
			)}
		</AppContainer>
	)
}

export default App
