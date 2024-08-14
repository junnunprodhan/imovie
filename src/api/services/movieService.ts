import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchLatestMovie = async () => {
  const response = await axios.get(`${BASE_URL}/movie/latest`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};

export const fetchNowPlayingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
    params: { api_key: API_KEY },
  });
  return response.data.results.slice(0, 12);
};

export const fetchPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: { api_key: API_KEY },
  });
  return response.data.results.slice(0, 12);
};

export const fetchLatestTVShow = async () => {
  const response = await axios.get(`${BASE_URL}/tv/latest`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};

export const fetchAiringTodayTVShows = async () => {
  const response = await axios.get(`${BASE_URL}/tv/airing_today`, {
    params: { api_key: API_KEY },
  });
  return response.data.results.slice(0, 12);
};

export const fetchPopularTVShows = async () => {
  const response = await axios.get(`${BASE_URL}/tv/popular`, {
    params: { api_key: API_KEY },
  });
  return response.data.results.slice(0, 12);
};
