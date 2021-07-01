import axios from 'axios'

const baseUrl = '/api/results'

const getAll = () => {
	return axios.get(baseUrl)
}

const update = (id, updatedObject) => {
	return axios.put(`${baseUrl}/${id}`, updatedObject)
}

const object = {
	getAll,
	update,
}

export default object
