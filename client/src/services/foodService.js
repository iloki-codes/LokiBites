import axios from 'axios';

export const getAll = async () => {
  const { data } = await axios.get('/foods');
  return data;
};

export const search = async searchTerm => {
  const { data } = await axios.get('/foods/search/' + searchTerm);
  return data;
};

export const getAllTags = async () => {
  const { data } = await axios.get('/foods/tags');
  return data;
};

export const getAllByTag = async tag => {
  if (tag === 'All') return getAll();
  const { data } = await axios.get('/foods/tag/' + tag);
  return data;
};

export const getById = async foodId => {
  const { data } = await axios.get('/foods/' + foodId);
  return data;
};

export async function deleteById(foodId) {
  await axios.delete('/foods/' + foodId);
}

export async function update(food) {
  await axios.put('/foods', food);
}

export async function add(food) {
  const { data } = await axios.post('/foods', food);
  return data;
}