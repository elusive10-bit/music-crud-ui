import axios from 'axios'

const baseUrl = '/api/users'

const create = async (newObject) => {
	return await axios.post(baseUrl, newObject)
}

const login = async (credentials) => {
	const response = await axios.post(`${baseUrl}/login`, credentials)
	return response.data
}

const users = {
	create,
	login,
}

export default users
