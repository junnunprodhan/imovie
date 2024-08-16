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
  return response.data.results.slice(4, 16);
};


export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: API_KEY,
        include_adult: false,
        include_video: false,
        language: 'en-US',
        page: 1,
        sort_by: 'popularity.desc',
      },
    });

    return response.data.results.slice(6, 18);
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};
export const fetchNowPlayingTvShows = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/airing_today`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });


    const tvShows = response.data.results.slice(0, 10);
    return tvShows;
  } catch (error) {
    console.error('Error fetching TV shows airing today:', error);
    return [];
  }
};

export const fetchAiringTodayTVShows = async () => {
  const response = await axios.get(`${BASE_URL}/tv/airing_today`, {
    params: { api_key: API_KEY },
  });
  return response.data.results.slice(0, 12);
};

export const fetchPopularTVShows = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/popular`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });
    return response.data.results.slice(7,19);
  } catch (error) {
    console.error('Error fetching popular TV shows:', error);
    return [];
  }
};



