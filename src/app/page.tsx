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
import RightSidebar from '@/components/RightSidebar';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Home = () => {
  const [latestMovie, setLatestMovie] = useState<any>(null);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  console.log('popular',popularMovies)

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
    <div className="flex h-screen max-w-screen-2xl mx-auto">
     
      <div className="w-1/6">
        <Sidebar />
        
      </div>
      <div className="relative h-screen">
  <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 shadow-lg"></div>
</div>

      {/* Column 2: Functional */}
      <div className="w-3/5 m-5 p-4 space-y-8">
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
            <div><div  className='h-56'>
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
        ></NowPlaying></div>
          </TabPanel>
          <TabPanel>
            <h1>tv shows</h1>
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