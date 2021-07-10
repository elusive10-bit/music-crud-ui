import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	background-color: #fff;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	padding: 10px 20px;
	margin-bottom: 10px;
`
const Logo = styled.div`
	animation-name: rotate-logo;
	animation-duration: 1.7s;
	display: flex;
	flex-flow: row;
	color: #fff;
`
const User = styled.div`
	animation-name: move-user;
	animation-duration: 1.7s;
`

const Nav = () => {
	return (
		<Container>
			<Logo>
				<img src='images/logo.svg' alt='' id='logo' />
			</Logo>

			<User>
				<img src='images/user.svg' alt='' />
			</User>
		</Container>
	)
}
export default Nav
