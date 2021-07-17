import Nav from './components/Nav'
import Side from './components/Side'
import Results from './components/Results'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import React, { useState, useEffect } from 'react'
import { Container as BootstrapContainer, Row, Col } from 'react-bootstrap'
import resultsApi from './services/results'
import playlistsApi from './services/playlists'
import usersApi from './services/users'
import styled from 'styled-components'
import { toast, ToastContainer } from 'react-toastify'

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
	const [playlists, setPlaylists] = useState([])
	const [results, setResults] = useState([])
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [isRegistered, setIsRegistered] = useState(true)
	const [user, setUser] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('loggedInUser')

		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON)
			setIsLoggedIn(true)
			setUser(user)
			resultsApi.setToken(user.token)
			playlistsApi.setToken(user.token)
		} else {
			setIsLoggedIn(false)
		}

		if (isLoggedIn) {
			resultsApi.getAll().then((response) => {
				setResults(response.data)
			})
			playlistsApi.getAllPlaylists().then((response) => {
				setPlaylists(response.data)
			})
		} else {
			setPlaylists([])
		}
	}, [isLoggedIn])

	const mainContainer = (
		<Container fluid='xl' className='main-container'>
			<ToastContainer></ToastContainer>

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
					playlists={playlists}
					setPlaylists={setPlaylists}
					results={results}
					setResults={setResults}
				/>

				<ResultsColumn md={8}>
					<Results
						playlists={playlists}
						setPlaylists={setPlaylists}
						results={results}
						setResults={setResults}
						user={user}
					/>
				</ResultsColumn>
			</Row>
		</Container>
	)

	const handleSubmit = async (event) => {
		event.preventDefault()

		const userCredentials = {
			username: username,
			password: password,
		}
		try {
			const user = await usersApi.login(userCredentials)
			setIsLoggedIn(!isLoggedIn)
			window.localStorage.setItem('loggedInUser', JSON.stringify(user))
			resultsApi.setToken(user.token)
			setUsername('')
			setPassword('')
			setUser(user)
		} catch (exception) {
			toast.error('Wrong Credentials')
			console.log(exception.message)
		}
	}

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
					setUser={setUser}
					isRegistered={isRegistered}
					setIsRegistered={setIsRegistered}
					isLoggedIn={isLoggedIn}
					setIsLoggedIn={setIsLoggedIn}
					username={username}
					setUsername={setUsername}
					password={password}
					setPassword={setPassword}
					handleSubmit={handleSubmit}
				/>
			)}
		</AppContainer>
	)
}

export default App
