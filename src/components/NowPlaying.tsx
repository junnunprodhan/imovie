
import React, { useState } from 'react';
import MovieGrid from './MovieGrid';
import NavigationButtons from './NavigationButtons';

interface Movie {
  posterPath: string;
  title: string;

}

interface NowPlayingProps {
  movies: Movie[];
  setSelectedMovie:React.Dispatch<React.SetStateAction<Movie |null>>
}

const NowPlaying: React.FC<NowPlayingProps> = ({ movies,setSelectedMovie}) => {
   const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const nowPlayingMovies = movies?.map((item: any) => ({
        posterPath: item.poster_path,
        title: item.title || item.name,
       
      }
    )
  );
  const handleNext = () => {
    if (currentIndex + itemsPerPage < nowPlayingMovies.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="relative mt-24">
      <h4 className="text-xl font-semibold mb-4">Now Playing</h4>

      <MovieGrid
        movies={nowPlayingMovies}
        currentIndex={currentIndex}
        itemsPerPage={itemsPerPage}
        onClick={handleClick}
        setSelectedMovie={setSelectedMovie}
      />

      <NavigationButtons
        onPrevious={handlePrevious}
        onNext={handleNext}
        disablePrevious={currentIndex === 0}
        disableNext={currentIndex + itemsPerPage >= nowPlayingMovies.length}
      />
    </div>
  );
};

export default NowPlaying;



