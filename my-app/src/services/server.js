import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const KEY = '5a24b7189a6caa5f12a9aa4d37534986';

export const getArticles = () => {
  const url = `/3/trending/all/day?api_key=${KEY}`;
  return axios.get(url);
};
export const getSearchArticles = query => {
  const url = `/3/search/movie?api_key=${KEY}&language=en-US&page=1&query=${query}`;
  return axios.get(url);
};

export const getArticlesById = id => {
  const url = `/3/movie/${id}?api_key=${KEY}&language=en-US`;
  return axios.get(url);
};
export const getArticleReview = id => {
  const url = `/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;
  return axios.get(url);
};
export const getArticleCredits = id => {
  const url = `/3/movie/${id}/credits?api_key=${KEY}`;
  return axios.get(url);
};
