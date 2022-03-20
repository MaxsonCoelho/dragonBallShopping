import axios from 'axios';


const api = axios.create({
  baseURL: 'https://gist.githubusercontent.com/MaxsonCoelho/fa08376fd6fb226f2edebc63b2a817c5/raw/dffc7dd92b09a113ac486e04971874f4a7c8ce56',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
})


export default api;
