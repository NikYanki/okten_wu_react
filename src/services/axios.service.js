import axios from 'axios';

import baseURL from '../constants/links';

const axiosService = axios.create({'https://jsonplaceholder.typicode.com'});
export default axiosService