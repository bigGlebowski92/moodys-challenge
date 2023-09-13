import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/photos',
});

// as we don't have &limit in api, we need to implement it mannualy, by passing pageParam
export const getPhotos = async (pageParam = 1, options = {}) => {
  const response = await api.get(`?_page=${pageParam}`, options);
  return response.data;
};
