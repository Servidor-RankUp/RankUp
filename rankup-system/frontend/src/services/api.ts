import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000', // conecta com o backend NestJS
})

export default api
