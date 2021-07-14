import axios from 'axios'

const baseUrl = '/api/results'

const getAll = () => {
	return axios.get(baseUrl)
}

const getAllSelected = (id) => {
	return axios.get(`${baseUrl}/user/${id}`)
}

const update = (id, updatedObject) => {
	return axios.put(`${baseUrl}/${id}`, updatedObject)
}

const object = {
	getAll,
	getAllSelected,
	update,
}

export default object
