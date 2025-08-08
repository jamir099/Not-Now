import axios from 'axios'

const instance = axios.create({
    baseURL:  "https://not-now-backend.onrender.com/",
})

export default instance;
