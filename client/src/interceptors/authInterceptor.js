import axios from 'axios';

axios.interceptors.request.use(
  req => {
    const user = localStorage.getItem('user');
    const token = user && JSON.parse(user).token;
    if (token) {
      req.headers['Authorization'] = `Bearer${token}`;
      console.log('Token sent', token);
    } else {
      console.log('No token found in localStorage');
    }
    return req;
  },
  error => {
    return Promise.reject(error);
  }
);