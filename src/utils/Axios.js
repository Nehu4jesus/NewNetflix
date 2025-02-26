import axios from 'axios';

// utils/Axios.js
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3" // Change to HTTPS
});
export default instance;