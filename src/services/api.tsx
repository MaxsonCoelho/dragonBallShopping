import axios from 'axios';


const api = axios.create({
  baseURL: 'https://gist.githubusercontent.com/MaxsonCoelho/fa08376fd6fb226f2edebc63b2a817c5/raw/aeb2f11afe00b5e34f385c3a0dcb40ae5cabca9d',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
})


export default api;
