'use client'
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import NMovieCard from "../components/NMovieCard"
import NBanner from "../components/NBanner"

import {
  fetchLatestMovie,
  fetchMovieDetails,
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
interface Movie {
  posterPath: string;
  title: string;
}

const Home = () => {

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const movies = [
    { posterPath: '/path_to_movie1.jpg', title: 'Movie 1' },
    { posterPath: '/path_to_movie2.jpg', title: 'Movie 2' },
    // Add more movies as needed
  ];

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };






  const [latestMovie, setLatestMovie] = useState<any>(null);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);
  const [nowPlayingTvShows, setNowPlayingTvShows] = useState<any[]>([]);
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  const [popularTvShows, setPopularTvShows] = useState<any[]>([]);
  const [movieDetails, setMovieDetails] = useState<any[]>([]);
  console.log('popular',popularMovies)

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


  const posterPath = popularMovies[0]?.poster_path || "https://i.ibb.co/KV9dG1z/super.jpg"
  const title = popularMovies[0]?.title  
  const handleButtonClick = async() => {
    console.log('Button click')
  }
  return (
    <div>
    <div className="flex max-w-screen-2xl mx-auto">
     
      <div className="w-1/6">
        <Sidebar />
        
      </div>
      <div className="relative h-screen">
  <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 shadow-lg"></div>
</div>











      {/* Column 2: Functional */}
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
            title={title}
            buttonText="Explore Now"
            imageUrl={`https://image.tmdb.org/t/p/w500${selectedMovie?.posterPath|| "https://i.ibb.co/KV9dG1z/super.jpg"}`}
            />
          )}
        </div>

        <NowPlaying
         movies={nowPlayingMovies}
        ></NowPlaying>
        <TopRated
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
              title={title}
              buttonText="Explore Now"
              imageUrl="https://image.tmdb.org/t/p/w500/your-image-path.jpg"
               onButtonClick={handleButtonClick}
            />
          )}
        </div>
        <NowPlaying
         movies={nowPlayingTvShows}
        ></NowPlaying>
        <TopRated
        movies ={popularTvShows}
        >
        </TopRated>
        
        </div>
          </TabPanel>
          </Tabs>
        {/* Row 1: Latest Movie */}
        {/* <div  className='h-56'>
          {latestMovie && (
            <Banner
              posterPath={posterPath}
              title={title}
            />
          )}
        </div>
        <NowPlaying
         movies={nowPlayingMovies}
        ></NowPlaying>
        <NowPlaying
         movies={nowPlayingMovies}
        ></NowPlaying> */}
        
      </div>


      <div className="relative h-full">
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 shadow-lg"></div>
     </div>

      {/* Column 3: Non-Functional */}
      <RightSidebar></RightSidebar>
    </div>
    <Footer></Footer>
    </div>
 
  );
};

export default Home;

// <Tabs>
{/* <TabList className={"flex justify-center items-center sm:flex-wrap"}>
<Tab>Recent</Tab>
<Tab>All</Tab>

</TabList>

<TabPanel>

</TabPanel>
<TabPanel>

</TabPanel>
</Tabs> */}