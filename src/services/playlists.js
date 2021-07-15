import axios from 'axios'

const baseUrl = '/api/playlist'

let token = null

const setToken = (newToken) => {
	token = `bearer ${newToken}`
}

const getAllPlaylists = async () => {
	const config = {
		headers: { Authorization: token },
	}
	const request = await axios.get(baseUrl, config)

	return request
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
	getAllPlaylists,
	create,
	deleteItem,
	setToken,
}

export default object
