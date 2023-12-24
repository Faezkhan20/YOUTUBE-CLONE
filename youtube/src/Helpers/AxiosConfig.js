import axios from 'axios'

const BackendURL = 'https://youtube-clone-backend-8afg.onrender.com/youtube/api/v1'

const api = axios.create({baseURL : BackendURL})

export default api