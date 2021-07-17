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

const findResultNotFromPlaylist = (id) => {
	const config = {
		headers: {
			Authorization: token,
		},
	}

	return axios.get(`${baseUrl}/${id}`, config)
}

const object = {
	getAll,
	getAllSelected,
	update,
	setToken,
	findResultNotFromPlaylist,
}

export default object
