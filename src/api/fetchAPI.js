import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '45b0b261b921954ac82a34bd1131a569',
  },
});

export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchTrending = async () => {
  const { data } = await api.get('/trending/all/day', {
    parans: {
      page: 1,
    },
  });
  return data;
};
export const fetchMovieReviews = async id => {
  const { data } = await api.get(`/movie/${id}/reviews`);
  return data;
};
export const fetchMovieID = async id => {
  const { data } = await api.get(`/movie/${id}`);
  return data;
};
export const fechMovieByQuery = async query => {
  const { data } = await api.get(`search/movie/`, {
    params: {
      query,
    },
  });
  return data;
};
export const fetchMovieCast = async id => {
  const { data } = await api.get(`/movie/${id}/credits`);
  return data;
};
