import React, { useState } from 'react';
import MovieGrid from './MovieGrid';
import NavigationButtons from './NavigationButtons';
import TopRatedMovieGrid from './TopRatedMovieGrid';

interface Movie {
  posterPath: string;
  title: string;
}

interface TopRatedProps {
  movies: Movie[];
  setSelectedMovie:React.Dispatch<React.SetStateAction<Movie |null>>
}

const TopRated: React.FC<TopRatedProps> = ({ movies,setSelectedMovie }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const topRatedMovies = movies?.map((item: any) => ({
    posterPath: item.poster_path,
    title: item.title,
  }));

  const handleNext = () => {
    if (currentIndex + itemsPerPage < topRatedMovies.length) {
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
    <div className="relative mt-5">
      <h4 className="text-xl font-semibold mb-4">Top Rated Movies</h4>

      <TopRatedMovieGrid
        movies={topRatedMovies}
        currentIndex={currentIndex}
        itemsPerPage={itemsPerPage}
        onClick={handleClick}
        setSelectedMovie={setSelectedMovie}
      />

      <NavigationButtons
        onPrevious={handlePrevious}
        onNext={handleNext}
        disablePrevious={currentIndex === 0}
        disableNext={currentIndex + itemsPerPage >= topRatedMovies.length}
      />
    </div>
  );
};

export default TopRated;



