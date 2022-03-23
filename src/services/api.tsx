import axios from 'axios';


const api = axios.create({
  baseURL: 'https://gist.githubusercontent.com/MaxsonCoelho/fa08376fd6fb226f2edebc63b2a817c5/raw/94355261e61f9e73c23f40d89c04f1cd82b88aa5',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
})


export default api;
