import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const API_KEY = '55893182-8e8d8d313eea42e04d9d959ce';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`;

  const response = await axios.get(url);
  return response.data;
}
