import axios from 'axios'

const baseUrl = '/api/current-playlist'

const getAll = () => {
	return axios.get(baseUrl)
}

let token = null

const setToken = (newToken) => {
	token = `bearer ${newToken}`
}

const create = async (newPlaylistItem) => {
	const config = {
		headers: { Authorization: token },
	}

	return await axios.post(baseUrl, newPlaylistItem, config)
}

const deleteItem = (id) => {
	return axios.delete(`${baseUrl}/${id}`)
}

const object = {
	getAll,
	create,
	deleteItem,
	setToken,
}

export default object
