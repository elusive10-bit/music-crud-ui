import React from 'react'
import {
	Container as BootstrapContainer,
	Button as BootstrapButton,
	FormControl,
} from 'react-bootstrap'
import styled from 'styled-components'

const Button = styled(BootstrapButton)`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	width: 100%;
	height: 100%;
	font-size: 1.2rem;
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
		width: 80px;
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

	a {
		color: orange;
	}
`

const LoginForm = ({ isRegistered, setIsRegistered }) => {
	const handleClick = (event) => {
		event.preventDefault()
		setIsRegistered(!isRegistered)
	}
	const handleSubmit = (event) => {
		event.preventDefault()
	}
	return (
		<Container>
			<ImageContainer>
				<img src='images/logo2.svg' />
			</ImageContainer>
			<Form onSubmit={handleSubmit}>
				<InputContainer>
					<label htmlFor='username'>Username</label>
					<Input type='text' name='username' />
				</InputContainer>

				<InputContainer>
					<label htmlFor='password'>Password</label>
					<Input type='password' name='password' />
				</InputContainer>

				<ButtonContainer>
					<Button variant='success' type='submit'>
						Login
					</Button>
				</ButtonContainer>

				<LinkContainer>
					<a href='' onClick={handleClick}>
						Don't have an account: Sign Up
					</a>
				</LinkContainer>
			</Form>
		</Container>
	)
}

export default LoginForm
