import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import resultsApi from '../services/results'
import playlistsApi from '../services/playlists'

const Container = styled.div`
	background-color: #fff;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	padding: 20px 20px;
	margin-bottom: 10px;
	margin-top: 10px;
	border-radius: 8px;
`
const Logo = styled.div`
	animation-name: rotate-logo;
	animation-duration: 1.7s;

	display: flex;
	flex-flow: row;
	color: #fff;

	img {
		width: 50px;
	}
`
const User = styled.div`
	display: flex;
	flex-flow: row;
	animation-name: move-user;
	animation-duration: 1.7s;
	align-items: center;

	button {
		margin-right: 10px;
		color: #fff;
		font-size: 1.1rem;
	}

	.userName {
		margin-right: 10px;
		font-weight: 600;
	}
`

const Nav = ({ isLoggedIn, setIsLoggedIn, user, setUser }) => {
	const handleClick = () => {
		setIsLoggedIn(!isLoggedIn)
		setUser(null)
		window.localStorage.clear()
		resultsApi.setToken(null)
		playlistsApi.setToken(null)
	}

	return (
		<Container>
			<Logo>
				<img src='images/logo2.svg' alt='' id='logo' />
			</Logo>

			<User>
				<h4>
					Welcome <span className='userName'>{user.name}</span>
				</h4>
				<Button variant='warning' onClick={() => handleClick()}>
					Logout
				</Button>
				<img src='images/user.svg' alt='' />
			</User>
		</Container>
	)
}
export default Nav
