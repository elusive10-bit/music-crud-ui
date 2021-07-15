import axios from 'axios'

const baseUrl = '/api/results'

const getAll = () => {
	return axios.get(baseUrl)
}

let token = null

const setToken = (newToken) => {
	token = `bearer ${newToken}`
}

const getAllSelected = () => {
	return axios.get(`${baseUrl}/user/${token}`)
}

const update = (id, updatedObject) => {
	return axios.put(`${baseUrl}/${id}`, updatedObject)
}

const object = {
	getAll,
	getAllSelected,
	update,
	setToken,
}

export default object
