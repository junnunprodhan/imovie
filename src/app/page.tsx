'use client'
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';

import {
  fetchLatestMovie,
  fetchNowPlayingMovies,
  fetchNowPlayingTvShows,
  fetchPopularMovies,
  fetchPopularTVShows,
} from '../api/services/movieService';
import Banner from '@/components/Banner';
import NowPlaying from '@/components/NowPlaying';
import RightSidebar from '@/components/RightSidebar';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TopRated from '@/components/TopRated';
import Footer from '@/components/Footer';

export interface Movie {
  posterPath: string;
  title: string;
}

const Home = () => {

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>({
    title:"",
    posterPath: ""
  });

  const [latestMovie, setLatestMovie] = useState<any>(null);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);
  const [nowPlayingTvShows, setNowPlayingTvShows] = useState<any[]>([]);
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  const [popularTvShows, setPopularTvShows] = useState<any[]>([]);
 

  useEffect(() => {
    const fetchData = async () => {
      const latestMovieData = await fetchLatestMovie();
      const nowPlayingMoviesData = await fetchNowPlayingMovies();
      const nowPlayingTvShowsData = await fetchNowPlayingTvShows();
      const popularMoviesData = await fetchPopularMovies();
      const popularTvShowsData = await fetchPopularTVShows();
      setLatestMovie(latestMovieData);
      setNowPlayingMovies(nowPlayingMoviesData);
      setNowPlayingTvShows(nowPlayingTvShowsData);
      setPopularMovies(popularMoviesData);
      setPopularTvShows(popularTvShowsData);
    };

    fetchData();
  }, []);

  // const popularTvPoster = popularTvShows[3]?.poster_path || "https://i.ibb.co/18SY9sm/natural.jpg"
  // const popularTvShowsTitle= popularTvShows[3]?.original_name 
  // const posterPath = popularMovies[0]?.poster_path || "https://i.ibb.co/KV9dG1z/super.jpg"
  // const title = popularMovies[0]?.title  
  
  return (
    <div>
    <div className="flex max-w-screen-2xl mx-auto">
     
      <div className="w-1/6">
        <Sidebar />
        
      </div>
      <div>
      <div className="relative h-full">
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 shadow-lg"></div>
     </div>
      </div>
      <div className="w-3/5 p-4 space-y-8">
      <Tabs>
          <TabList className={"flex items-center sm:flex-wrap"}>
            <Tab className={"mr-4"}
             selectedClassName="text-black font-bold"
            >Movie</Tab>
            <Tab
            
             selectedClassName="text-black font-bold"
            >TV Shows</Tab>
          
          </TabList>

          <TabPanel>
            <div>
                <div  className='h-56'>
          {latestMovie && (
            <Banner
            title={selectedMovie?.title || "Super Natural"}
            buttonText="Watch Now"
            imageUrl={selectedMovie?.posterPath ? `https://image.tmdb.org/t/p/w500${selectedMovie?.posterPath }`: "" }
            />
          )}
        </div>

        <NowPlaying
        setSelectedMovie={setSelectedMovie}
         movies={nowPlayingMovies}
        ></NowPlaying>
        <TopRated
        setSelectedMovie={setSelectedMovie}
        movies ={popularMovies}
        >
        </TopRated>

        </div>
          </TabPanel>
          <TabPanel>
          <div>
            <div  className='h-56'>
          {latestMovie && (
            <Banner
            title={selectedMovie?.title || "Super Natural"}
              buttonText="Watch Now"
              imageUrl={selectedMovie?.posterPath ? `https://image.tmdb.org/t/p/w500${selectedMovie?.posterPath }`: "" }
            />
          )}
        </div>
        <NowPlaying
        setSelectedMovie={setSelectedMovie}
         movies={nowPlayingTvShows}
        ></NowPlaying>
        <TopRated
        setSelectedMovie={setSelectedMovie}
        movies ={popularTvShows}
        >
        </TopRated>
        
        </div>
          </TabPanel>
          </Tabs>
      </div>
      <div>
      <div className="relative h-full">
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 shadow-lg"></div>
     </div>
      </div>

      <RightSidebar></RightSidebar>
    </div>
    <Footer></Footer>
    </div>
 
  );
};

export default Home;