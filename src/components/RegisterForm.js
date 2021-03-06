import React, { useState } from 'react'
import {
	Container as BootstrapContainer,
	Button as BootstrapButton,
	FormControl,
} from 'react-bootstrap'
import styled from 'styled-components'
import usersProvider from '../services/users'

const Button = styled(BootstrapButton)`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	width: 100%;
	height: 100%;
	font-size: 1.2rem;
	background-color: orange;
	color: #fff;

	:hover {
		background-color: rgba(200, 130, 50);
		color: #fff;
	}
`

const ButtonContainer = styled.div`
	width: 100%;
	height: 45px;
`

const Container = styled(BootstrapContainer)`
	background-color: #fff;
	display: flex;
	flex-flow: column wrap;
	width: 500px;
	padding: 20px 60px;
	border-radius: 8px;
`

const ImageContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;

	img {
		width: 60px;
	}
`

const Form = styled.form`
	padding: 10px;
	margin: 10px;
	display: flex;
	flex-flow: column wrap;
	align-items: center;
`

const InputContainer = styled.div`
	display: flex;
	margin-bottom: 10px;
	flex-flow: row wrap;
	justify-content: space-between;
	width: 100%;
	label {
		font-size: 0.9rem;
		margin-bottom: 3px;
	}
`
const Input = styled(FormControl)`
	border-radius: 5px;
`

const LinkContainer = styled.div`
	margin-top: 10px;
	font-size: 1rem;

	button {
		background-color: #fff;
		border: none;
		color: #3cae67f9;
		box-shadow: 0;
	}
`

const RegisterForm = ({ isRegistered, setIsRegistered }) => {
	const [username, setUsername] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const handleClick = (event) => {
		event.preventDefault()
		setIsRegistered(!isRegistered)
	}

	const createNewUser = async (newUser) => {
		await usersProvider.create(newUser)
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		const newUser = {
			username: username,
			name: name,
			password: password,
		}

		createNewUser(newUser)

		setIsRegistered(!isRegistered)
		setName('')
		setUsername('')
		setPassword('')
	}

	return (
		<Container>
			<ImageContainer>
				<img src='images/logo2.svg' alt='' />
			</ImageContainer>
			<Form onSubmit={handleSubmit}>
				<InputContainer>
					<label htmlFor='username'>Username</label>
					<Input
						type='text'
						name='username'
						onChange={({ target }) => setUsername(target.value)}
						value={username}
					/>
				</InputContainer>

				<InputContainer>
					<label htmlFor='name'>Name</label>
					<Input
						type='text'
						name='name'
						onChange={({ target }) => setName(target.value)}
						value={name}
					/>
				</InputContainer>

				<InputContainer>
					<label htmlFor='password'>Password</label>
					<Input
						type='password'
						name='password'
						onChange={({ target }) => setPassword(target.value)}
						value={password}
					/>
				</InputContainer>

				<ButtonContainer>
					<Button variant='' type='submit'>
						Sign Up
					</Button>
				</ButtonContainer>

				<LinkContainer>
					<button onClick={handleClick}>
						Already have an account: Sign In
					</button>
				</LinkContainer>
			</Form>
		</Container>
	)
}

export default RegisterForm
