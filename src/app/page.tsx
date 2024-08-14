'use client'
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import {
  fetchLatestMovie,
  fetchNowPlayingMovies,
  fetchPopularMovies,
} from '../api/services/movieService';
import Banner from '@/components/Banner';
import NowPlaying from '@/components/NowPlaying';
import TopRated from '@/components/TopRated';
import RightSidebar from '@/components/Rightsidebar';

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
  console.log(popularMovies)
  return (
    <div className="flex h-screen">
     
      <div className="w-1/6">
        <Sidebar />
        
      </div>
      <div className="relative h-screen">
  <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 shadow-lg"></div>
</div>

      {/* Column 2: Functional */}
      <div className="w-3/5 m-5 p-4 space-y-8">
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
        {/* <div className='mt-5'>
          <h4 className="text-xl font-semibold mb-2">Now Playing</h4>
          <HorizontalList
            items={nowPlayingMovies.map((movie) => ({
              posterPath: movie.poster_path,
              title: movie.title,
            }))}
          />
        </div> */}

        <NowPlaying
         movies={nowPlayingMovies}
        ></NowPlaying>

        {/* Row 3: Popular Movies */}


        {/* <div>
          <h4 className="text-xl font-semibold mb-2">Top Rated Movies</h4>
          <HorizontalList
            items={popularMovies.map((movie) => ({
              posterPath: movie.poster_path,
              title: movie.title,
            }))}
          />
        </div> */}
     
     
   {/* <TopRated movies={[]}>
    movies={popularMovies}
   </TopRated> */}
        
      </div>


      <div className="relative h-screen">
  <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 shadow-lg"></div>
</div>

      {/* Column 3: Non-Functional */}
      <RightSidebar></RightSidebar>
    </div>
  );
};

export default Home;

