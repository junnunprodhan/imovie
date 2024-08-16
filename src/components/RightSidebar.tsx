import React, { useEffect, useState } from 'react';
import Search from './Search';
import Button from './Button';
import MovieItem from './MovieItem';
import { fetchPopularMovies, fetchPopularTVShows } from '@/api/services/movieService';
import SeeMoreButton from './SeeMoreButton';
const RightSidebar = () => {
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  const [popularTvShows, setPopularTvShows] = useState<any[]>([]);
      const movies =popularMovies.slice(0,2) 
      const tvShows = popularTvShows.slice(0,4)
  useEffect(() => {
    const fetchData = async () => {
      
      const popularTvShowsData = await fetchPopularTVShows();
      const popularMoviesData = await fetchPopularMovies();
      setPopularTvShows(popularTvShowsData);
      setPopularMovies(popularMoviesData);
    };

    fetchData();
  }, []);

  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className="w-1/5 p-6 m-5">
      <Search />
      <h5 className="text-lg my-2 font-bold">Popular Movies</h5>
   
      <div className="">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.title}
          genre={movie.genre_ids.join(', ')} 
          rating={Math.round(movie.vote_average / 2)} 
          duration={movie.popularity}
        />
      ))}
    </div>
      <SeeMoreButton text="See More" onClick={handleClick}/>
      <h5 className="text-lg my-2 mt-3 font-bold">Watchlist</h5>
      <div className="">
      {tvShows.map((movie) => (
        <MovieItem
          key={movie.id}
          imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.original_name}
          genre={movie.genre_ids.join(', ')} 
          rating={Math.round(movie.vote_average / 2)} 
          duration={movie.popularity}
        />
      ))}
    </div>
    <SeeMoreButton text="See More" onClick={handleClick}/>
    </div>
  );
};

export default RightSidebar;


