import Image from 'next/image';
import React from 'react';
import Button from './Button';
import { AiOutlinePlus } from "react-icons/ai";
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
      <AiOutlinePlus className='absolute text-white font-bold text-2xl p-1 top-2 right-2 bg-gray-800 bg-opacity-35'  />
      <Button text="Watch Now" onClick={handleClick} />
      
    </div>
  );
};

export default MovieCard;
