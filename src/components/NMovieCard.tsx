import React from 'react';
import Image from 'next/image';
import Button from './Button'; // Assuming you have a reusable Button component

interface MovieCardProps {
  posterPath: string;
  title: string;
  onClick: () => void;
}

const NMovieCard: React.FC<MovieCardProps> = ({ posterPath, title, onClick }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        height={300}
        width={200}
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <Button text="Watch Now" onClick={onClick} />
      </div>
    </div>
  );
};

export default NMovieCard;
