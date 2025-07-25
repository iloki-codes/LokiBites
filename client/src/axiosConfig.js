import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production' 
    ? 'https://lokibites.onrender.com/api'
    : 'http://localhost:5000/api';

export default axios;

//   https://loki-bites-2bu5ma2e6-ilokicodes-projects.vercel.app
