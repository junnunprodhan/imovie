import Image from 'next/image';
import React from 'react';
import Button from './Button';
import { AiOutlinePlus } from "react-icons/ai";
import { Movie } from '@/app/page';
interface MovieCardProps {
  posterPath: string;
  title: string;
  setSelectedMovie:React.Dispatch<React.SetStateAction<Movie |null>>
}

const MovieCard: React.FC<MovieCardProps> = ({ posterPath, title,setSelectedMovie }) => {
  const movie ={
    posterPath,
    title,
  }

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
      <Button text="Watch Now" onClick={()=>setSelectedMovie(movie)} />
      
    </div>
  );
};

export default MovieCard;
