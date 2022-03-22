import axios from 'axios';


const api = axios.create({
  baseURL: 'https://gist.githubusercontent.com/MaxsonCoelho/fa08376fd6fb226f2edebc63b2a817c5/raw/3683604d29093b65ecaa4c33f792285a5df95a2a',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
})


export default api;
