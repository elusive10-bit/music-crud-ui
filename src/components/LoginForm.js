import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const Container = styled.(Container)`
	border: 1px solid #000;
`

const LoginForm = () => {
	return (
		<Container>
			<form>
				<h2>Login Form</h2>
			</form>
		</Container>
	)
}

export default LoginForm
