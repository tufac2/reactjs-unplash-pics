import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unplash.com',
  headers: {
    Authorization: 'Client-ID 07aa6ddfffe9f96d5c80d771fcdd382828d54e223dd8ab3bf74e9dae8c5bc2cf'
  }
});