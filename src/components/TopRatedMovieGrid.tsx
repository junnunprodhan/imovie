import React from 'react';
import MovieCard from './MovieCard';

interface Movie {
  posterPath: string;
  title: string;
}

interface MovieGridProps {
  movies: Movie[];
  currentIndex: number;
  itemsPerPage: number;
  onClick: () => void;
  setSelectedMovie:React.Dispatch<React.SetStateAction<Movie |null>>
}

const TopRatedMovieGrid: React.FC<MovieGridProps> = ({ movies, currentIndex, itemsPerPage, onClick, setSelectedMovie}) => {
    const handleClick = () => {
        console.log('Button clicked!');
      };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {movies.slice(currentIndex, currentIndex + itemsPerPage).map((movie, index) => (
        <MovieCard
          key={index}
          posterPath={movie.posterPath}
          title={movie.title}
          setSelectedMovie={setSelectedMovie}
        />
      ))}
    </div>
  );
};

export default TopRatedMovieGrid;