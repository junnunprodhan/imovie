import React from 'react';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

interface MovieItemProps {
  imageUrl: string;
  title: string;
  genre: string;
  rating: number; // Assuming rating is out of 5
  duration: string; // Duration in "hh:mm" format
}

const MovieItem: React.FC<MovieItemProps> = ({ imageUrl, title, genre, rating, duration }) => {
  return (
    <div className='flex gap-4 my-2 items-center'>
      <div>
        <Image
          width={50}
          height={80}
          src={imageUrl}
          alt={title}
          className="rounded-md"
        />
      </div>
      <div>
        <h3 className='font-bold'>{title}</h3>
        <p className='text-sm text-gray-600'>{genre}</p>
        <div className='flex gap-1'>
          {[...Array(5)].map((_, index) => (
            <AiFillStar
              key={index}
              className={index < rating ? 'text-yellow-400' : 'text-gray-200'}
            />
          ))}
        </div>
      </div>
      <h4 className='ml-auto'>{duration}</h4>
    </div>
  );
};

export default MovieItem;
