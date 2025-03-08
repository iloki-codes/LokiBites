import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production' ? '/' : 'https://loki-bites.vercel.app/';

export default axios;


// http://localhost:5000  https://loki-bites-2bu5ma2e6-ilokicodes-projects.vercel.app