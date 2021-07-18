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

const deleteItemFromPlaylist = async (item_id, playlist_id) => {
	const request_body = {
		playlist_id,
	}

	return await axios.put(`${baseUrl}/${item_id}`, request_body)
}

const addToPlaylist = async (playlist_id, result_id) => {
	const updated = {
		playlist_id,
		result_id,
	}

	return await axios.put(`${baseUrl}/result/${result_id}`, updated)
}

const removePlaylist = async (playlist_id) => {
	return await axios.delete(`${baseUrl}/${playlist_id}`)
}

const object = {
	getAllPlaylists,
	create,
	deleteItemFromPlaylist,
	setToken,
	addToPlaylist,
	removePlaylist,
}

export default object
