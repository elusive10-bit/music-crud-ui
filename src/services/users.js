import axios from 'axios'

const baseUrl = '/api/users'

const create = async (newObject) => {
	return await axios.post(baseUrl, newObject)
}

const login = async (credentials) => {
	return await axios.post(`${baseUrl}/login`, credentials)
}

export default {
	create,
	login,
}
