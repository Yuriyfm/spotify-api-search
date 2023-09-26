import axios from "axios";

export const APIrequests = {
  getAuthToken() {
    return axios.post('/api/getAuthToken');
  },
  getGenres() {
    return axios.get('/api/getGenres')
  },
  getPlaylistsByGenre(selectedGenre: string | null) {
    return axios.get(`/api/getPlaylistsByGenre?genre=${selectedGenre}`)
  }
}