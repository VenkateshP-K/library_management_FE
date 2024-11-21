import axios from 'axios'

const baseURL = 'https://library-management-system-be.onrender.com/api'

const instance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

const protectedInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

protectedInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        console.log("Attaching token to request:", token);
        config.headers['Authorization'] = `Bearer ${token}`;
      } else {
        console.error("No token found in localStorage");
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  )
  
export { instance, protectedInstance }