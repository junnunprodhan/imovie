import Image from 'next/image';
import React from 'react';
import Button from './Button';

interface MovieCardProps {
  posterPath: string;
  title: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ posterPath, title }) => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className="text-center relative">
      <Image
      width={250}
      height={250}
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        alt={title}
        className="img-fluid"
      />
      <Button text="Watch Now" onClick={handleClick} />
    </div>
  );
};

export default MovieCard;
