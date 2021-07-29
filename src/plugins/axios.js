import axios from 'axios';

const axiosInstance = axios.create({
    
    baseURL: 'http://localhost:8000/api',
    headers: {
        'accept': 'application/json'
    }
});

export default axiosInstance;