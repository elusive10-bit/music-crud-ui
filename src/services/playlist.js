import axios from 'axios'

const baseUrl = '/api/current-playlist'

const getAll = () => {
	return axios.get(baseUrl)
}

const create = (newPlaylistItem) => {
	return axios.post(baseUrl, newPlaylistItem)
}

const deleteItem = (id) => {
	return axios.delete(`${baseUrl}/${id}`)
}

const object = {
	getAll,
	create,
	deleteItem,
}

export default object
