import axios from 'axios';

const user = JSON.parse(localStorage.getItem("user"));
const token = user ? user.token : null;

const axiosConfig = () => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const getUser = () =>
    localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;

export const login = async (email, password) => {
  
  const { data } = await axios.post('/users/login', { email, password });
  
  if (data.token) {
    localStorage.setItem("token", data.token);
    localStorage.setItem('user', JSON.stringify(data));
  }  else console.error("login error no token");
  
  return data;

};

export const register = async registerData => {
  const { data } = await axios.post('/users/register', registerData);
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

export const updateProfile = async user => {
  const { data } = await axios.put('/users/updateProfile', user);
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const changePassword = async passwords => {
  await axios.put('/users/changePassword', passwords);
};

export const getAll = async (searchTerm) => {
  const { data } = await axios.get('/users/getAll/' + (searchTerm ?? ''), axiosConfig() );
  // return setToken;
  return data;
};

export const toggleBlock = async userId => {
  const { data } = await axios.put('/users/toggleBlock/' + userId);
  return data;
};

export const getById = async userId => {
  const { data } = await axios.get('/users/getById/' + userId);
  return data;
};

export const updateUser = async userData => {
  const { data } = await axios.put('/users/update', userData);
  return data;
};