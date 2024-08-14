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
import Banner from '@/components/Banner';

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
  const posterPath = popularMovies[0]?.poster_path
  const title = popularMovies[0]?.title  
  console.log(title)
  return (
    <div className="flex h-screen">
      {/* Column 1: Non-Functional */}
      <div className="w-1/6">
        <Sidebar />
        
      </div>
      <div className="relative h-full ">
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 shadow-lg"></div>
       </div>
      {/* Column 2: Functional */}
      <div className="w-3/5 p-4 space-y-8">
        {/* Row 1: Latest Movie */}
        <div  className='h-56'>
          <h4 className="text-xl font-semibold mb-2">Latest Movie</h4>
          {latestMovie && (
            <Banner
              posterPath={posterPath}
              title={title}
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
          <h4 className="text-xl font-semibold mb-2">Top Rated Movies</h4>
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

