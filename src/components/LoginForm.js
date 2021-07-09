import React from 'react'
import { Container as BootstrapContainer } from 'react-bootstrap'
import styled from 'styled-components'

const Container = styled(BootstrapContainer)`
	border: 1px solid #000;
	padding: 10px;
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
