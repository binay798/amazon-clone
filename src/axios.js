import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:5001/fir-6ac86/us-central1/api'
})