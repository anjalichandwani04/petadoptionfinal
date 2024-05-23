import axios from 'axios';
import { BACKEND_URI } from "../utils/constants";

// const BACKEND_URI = process.env.REACT_APP_BACKEND_URI || 'http://localhost:3000';

const axiosInstance = axios.create({
    baseURL: BACKEND_URI + "/api", 
});

export default axiosInstance;