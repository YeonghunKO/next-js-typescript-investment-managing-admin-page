import axios from 'axios';
// import Cookies from 'univer'

const clientAPI = axios.create({
  baseURL: 'http://localhost:4000',
});

export default clientAPI;
