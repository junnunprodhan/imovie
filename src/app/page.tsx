'use client'
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import HorizontalList from '../components/HorizontalList';
import MovieCard from '../components/MovieCard';
import {
  fetchLatestMovie,
  fetchNowPlayingMovies,
  fetchPopularMovies,
} from '../api/services/movieService';

const Home = () => {
  const [latestMovie, setLatestMovie] = useState<any>(null);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);
  const [popularMovies, setPopularMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const latestMovieData = await fetchLatestMovie();
      const nowPlayingMoviesData = await fetchNowPlayingMovies();
      const popularMoviesData = await fetchPopularMovies();

      setLatestMovie(latestMovieData);
      setNowPlayingMovies(nowPlayingMoviesData);
      setPopularMovies(popularMoviesData);
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Column 1: Non-Functional */}
      <div className="w-1/5 shadow-xl">
        <Sidebar />
      </div>

      {/* Column 2: Functional */}
      <div className="w-3/5 p-4 space-y-8">
        {/* Row 1: Latest Movie */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Latest Movie</h4>
          {latestMovie && (
            <MovieCard
              posterPath={latestMovie.poster_path}
              title={latestMovie.title}
            />
          )}
        </div>

        {/* Row 2: Now Playing */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Now Playing</h4>
          <HorizontalList
            items={nowPlayingMovies.map((movie) => ({
              posterPath: movie.poster_path,
              title: movie.title,
            }))}
          />
        </div>

        {/* Row 3: Popular Movies */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Popular Movies</h4>
          <HorizontalList
            items={popularMovies.map((movie) => ({
              posterPath: movie.poster_path,
              title: movie.title,
            }))}
          />
        </div>
      </div>

      {/* Column 3: Non-Functional */}
      <div className="w-1/5 bg-gray-800 p-4">
        <h5 className="text-lg text-white">Extras</h5>
        {/* Add additional static content or components here */}
      </div>
    </div>
  );
};

export default Home;

